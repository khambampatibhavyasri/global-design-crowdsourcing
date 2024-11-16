import React, { useState } from 'react';

function PromptBar() {
  // State to hold the text input and file
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);

  // Handle changing the text input
  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  // Handle changing the image input
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (image) {
      // If an image is provided, use FormData to send to /pix-to-pix
      const formData = new FormData();
      formData.append('prompt', prompt);
      formData.append('image', image);

      fetch('http://localhost:5000/pix-to-pix', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => console.log('Pix-to-Pix Success:', data))
        .catch((error) => console.error('Pix-to-Pix Error:', error));
    } else {
      // If only prompt is provided, send JSON to /text-to-image
      const jsonData = {
        prompt: prompt,
        output_path: 'images/output_tti.png', // Example output path
      };

      fetch('http://localhost:5000/text-to-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      })
        .then((response) => response.json())
        .then((data) => console.log('Text-to-Image Success:', data))
        .catch((error) => console.error('Text-to-Image Error:', error));
    }

    // Reset form fields after submission
    setPrompt('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', marginTop: '20px' }}>
      <input
        type="text"
        value={prompt}
        onChange={handlePromptChange}
        placeholder="Enter your prompt"
        style={{ width: '300px', padding: '10px' }}
      />
      <input
        type="file"
        onChange={handleImageChange}
        style={{ width: '300px', padding: '10px' }}
      />
      <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
    </form>
  );
}

export default PromptBar;
