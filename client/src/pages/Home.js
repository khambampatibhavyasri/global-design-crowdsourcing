import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, List, Paper, TextField, InputAdornment } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useNavigate } from 'react-router-dom';

const useMessages = () => {
  const [messages, setMessages] = useState([]);
  return { messages, setMessages };
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  padding: '8px 16px',
  display: 'block',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#333',
  },
};

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [file, setFile] = useState(null);
  const { messages, setMessages } = useMessages();
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleLogin = () => navigate('/login');

  const handleEnter = async () => {
    if (prompt.trim() === '' && !file) return;

    const newMessage = {
      text: prompt,
      file: file ? URL.createObjectURL(file) : null,
      sender: 'user'
    };
    setMessages([...messages, newMessage]);

    try {
      let response;
      if (file && prompt.trim() !== '') {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('prompt', prompt);

        response = await fetch('http://127.0.0.1:5030/edit', {
          method: 'POST',
          body: formData,
        });
      } else if (prompt.trim() !== '' && !file) {
        response = await fetch('http://127.0.0.1:5030/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt }),
        });
      }

      if (response && response.ok) {
        const data = await response.blob();
        const responseUrl = URL.createObjectURL(data);

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: '', file: responseUrl, sender: 'bot' }
        ]);
      } else {
        console.error("Error:", response.status);
        alert('An error occurred while processing the request');
      }

    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing the request');
    }

    setPrompt('');
    setFile(null);
  };

  const handleAttach = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      const fileSize = selectedFile.size;

      if (!['image/jpeg', 'image/png', 'image/jpg'].includes(fileType)) {
        alert('Only JPG, JPEG, and PNG files are allowed.');
        return;
      }

      if (fileSize > 1 * 1024 * 1024) {
        alert('File size must be less than 1 MB.');
        return;
      }

      setFile(selectedFile);
    }
  };

  return (
    <Box display="flex" height="100vh" bgcolor="#1e1e1e" color="white">
      {isSidebarOpen && (
        <Box width="250px" bgcolor="#222" p={2} display="flex" flexDirection="column" justifyContent="space-between">
          <Typography variant="h6" mb={2}>Menu</Typography>
          <List sx={{ padding: 0 }}>
            <a href="/" style={linkStyle}>Home</a>
            <a href="/artisan" style={linkStyle}>Artisans</a>
            <a href="/contact" style={linkStyle}>Feedback</a>
          </List>
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Login</Button>
        </Box>
      )}

      <Box flexGrow={1} display="flex" flexDirection="column">
        <IconButton onClick={toggleSidebar} color="inherit" sx={{ alignSelf: 'flex-start', m: 1 }}>
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h5" ml={2} textAlign="center">Ready to Design...</Typography>

        <Box flexGrow={1} display="flex" flexDirection="column" alignItems="center" justifyContent="flex-end" p={2} overflow="auto">
          <Box width="100%" maxWidth="600px" display="flex" flexDirection="column" sx={{ overflowY: 'auto', maxHeight: '70vh' }}>
            {messages.map((message, index) => (
              <Paper key={index} elevation={2} sx={{
                padding: 1,
                marginBottom: 1,
                alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                bgcolor: message.sender === 'user' ? '#1976d2' : '#333',
                color: 'white',
                maxWidth: '75%',
              }}>
                <Typography variant="body1">{message.text}</Typography>
                {message.file && (
                  <Box mt={1}>
                    <img src={message.file} alt="Attached" style={{ maxWidth: '100%', borderRadius: 5 }} />
                  </Box>
                )}
              </Paper>
            ))}
          </Box>

          <TextField
            placeholder="Enter Prompt here..."
            variant="outlined"
            fullWidth
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            sx={{
              bgcolor: 'white',
              borderRadius: 1,
              input: { color: 'black' },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <input
                    type="file"
                    accept="image/jpeg, image/png, image/jpg"
                    style={{ display: 'none' }}
                    id="file-input"
                    onChange={handleAttach}
                  />
                  <label htmlFor="file-input">
                    <IconButton component="span">
                      <AttachFileIcon sx={{ cursor: 'pointer' }} />
                    </IconButton>
                  </label>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleEnter} sx={{ color: 'primary.main' }}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box bgcolor="#333" p={2} textAlign="center">
          <Typography variant="body2">Your data recorded for training purpose</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
