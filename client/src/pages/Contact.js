// src/pages/ContactUs.js
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ContactUs = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#1e1e1e"
      color="white"
      padding={2}
      sx={{ 
        '& .MuiTextField-root': { 
          margin: '10px 0',
          width: '100%', 
          maxWidth: '400px',
          '& input': { 
            color: 'black' 
          },
          '& label': { 
            color: '#bbb' 
          }
        },
        '& .MuiButton-root': { 
          marginTop: '20px',
          width: '100%', 
          maxWidth: '400px'
        },
      }}
    >
      <Typography variant="h4" gutterBottom>
        Feedback
      </Typography>
      <Typography variant="body1" paragraph>
        We would love to hear from you! Please fill out the form below and our team will get back to you as soon as possible.
      </Typography>
      
      <TextField
        label="Your Name"
        variant="outlined"
        required
      />
      <TextField
        label="Your Email"
        variant="outlined"
        required
        type="email"
      />
      <TextField
        label="Subject"
        variant="outlined"
        required
      />
      <TextField
        label="Message"
        variant="outlined"
        required
        multiline
        rows={4}
      />
      
      <Button variant="contained" color="primary" onClick={() => alert('Message sent!')}>
        Send Message
      </Button>
      
      <Typography variant="body1" paragraph sx={{ marginTop: '20px' }}>
        Alternatively, you can reach us at:
      </Typography>
      <Typography variant="body1">Email: support@example.com</Typography>
      <Typography variant="body1">Phone: +1 (555) 123-4567</Typography>
      <Typography variant="body1">Address: 123 Design Street, Creative City, CA 12345</Typography>
    </Box>
  );
};

export default ContactUs;
