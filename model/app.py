from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from PIL import Image
import torch
from diffusers import StableDiffusionPipeline, StableDiffusionInstructPix2PixPipeline
from transformers import CLIPProcessor, CLIPModel
import os
import io

app = Flask(__name__)
CORS(app)

# Ensure the 'static' directory exists
os.makedirs("static", exist_ok=True)

# Load the models
device = "cuda" if torch.cuda.is_available() else "cpu"

# Stable Diffusion model for generation
image_gen_model = StableDiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-2", torch_dtype=torch.float16, revision="fp16"
).to(device)

# CLIP model for image scoring
clip_model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32").to(device)
clip_processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# Instruct Pix2Pix model for image editing
edit_model = StableDiffusionInstructPix2PixPipeline.from_pretrained(
    "timbrooks/instruct-pix2pix", torch_dtype=torch.float16, revision="fp16", safety_checker=None
).to(device)
edit_model.enable_attention_slicing()

@app.route('/generate', methods=['POST'])
def generate_images():
    prompt = request.json.get('prompt', '')
    num_images = int(request.json.get('num_images', 5))
    seed = 42
    generator = torch.Generator(device).manual_seed(seed)
    image_gen_steps = 35
    image_gen_size = (512, 512)

    images = []
    for i in range(num_images):
        image = image_gen_model(
            prompt,
            num_inference_steps=image_gen_steps,
            generator=generator,
            guidance_scale=7.5
        ).images[0]
        image = image.resize(image_gen_size)
        images.append(image)

    # Score images with CLIP
    inputs = clip_processor(text=[prompt] * len(images), images=images, return_tensors="pt", padding=True).to(device)
    outputs = clip_model(**inputs)
    image_scores = outputs.logits_per_image.softmax(dim=-1).cpu().detach().numpy().flatten()

    best_image_idx = image_scores.argmax()
    best_image = images[best_image_idx]
    
    # Ensure output directory exists and save the best image
    output_path = "static/best_image_output.png"
    best_image.save(output_path)

    return send_file(output_path, mimetype='image/png')

@app.route('/edit', methods=['POST'])
def edit_image():
    # Check if file is uploaded
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400
    file = request.files['image']
    prompt = request.form.get('prompt', 'Change background from white to pink')

    try:
        # Load the image from the uploaded file
        image = Image.open(file).convert("RGB")
    except Exception as e:
        return jsonify({'error': f"Could not open image: {str(e)}"}), 400

    edited_image = edit_model(
        prompt, image=image, num_inference_steps=20, image_guidance_scale=1
    ).images[0]
    
    # Save edited image to a BytesIO object and send as response
    output = io.BytesIO()
    edited_image.save(output, format='JPEG')
    output.seek(0)

    return send_file(output, mimetype='image/jpeg')

if __name__ == '__main__':
    app.run(debug=True, port=5030)
