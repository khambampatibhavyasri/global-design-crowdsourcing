import React, { useState } from 'react';
import { PictureOutlined } from '@ant-design/icons';

// Prompt Input Component
const PromptInput = ({ prompt, handlePromptChange }) => {
  return (
    <input
      type="text"
      value={prompt}
      onChange={handlePromptChange}
      placeholder="Enter your prompt"
      style={styles.input}
    />
  );
};

// Image Upload Component
const ImageUpload = ({ handleImageChange }) => {
  return (
    <label style={styles.iconLabel}>
      <PictureOutlined style={styles.icon} />
      <input
        type="file"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </label>
  );
};

// Main PromptBar Component that uses both PromptInput and ImageUpload
function PromptBar() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (prompt && image) {
      setSubmissionMessage('Both prompt and image submitted!');
    } else if (prompt) {
      setSubmissionMessage('Only prompt submitted!');
    } else {
      setSubmissionMessage('Please enter a prompt and/or upload an image.');
      return; // Prevent submission if there's no input
    }
    
    console.log('Submitted Prompt:', prompt);
    console.log('Submitted Image:', image);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <PromptInput prompt={prompt} handlePromptChange={handlePromptChange} />
        <ImageUpload handleImageChange={handleImageChange} />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {submissionMessage && <div style={styles.message}>{submissionMessage}</div>}
    </div>
  );
}

// Styles for components
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  input: {
    width: '300px',
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  message: {
    marginTop: '10px'
  },
  iconLabel: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    marginRight: '5px',
    fontSize: '24px'
  }
};

export default PromptBar;
