// src/pages/AboutUs.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const AboutUs = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bgcolor="#1e1e1e" color="white" padding={2}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        We are a dedicated team of designers and developers passionate about creating stunning visuals and intuitive user experiences. Our mission is to empower businesses and individuals through design and technology.
      </Typography>
      <Typography variant="body1" paragraph>
        Founded in [Year], we have worked on a diverse range of projects, from small startups to large enterprises. Our expertise lies in UI/UX design, web development, and digital strategy. We believe that great design should be accessible to everyone.
      </Typography>
      <Typography variant="body1" paragraph>
        Our core values include:
      </Typography>
      <ul style={{ textAlign: 'left' }}>
        <li><Typography variant="body2">✨ Innovation: We embrace new ideas and technologies.</Typography></li>
        <li><Typography variant="body2">🤝 Collaboration: We work closely with our clients to understand their needs.</Typography></li>
        <li><Typography variant="body2">🌱 Growth: We are committed to continuous learning and improvement.</Typography></li>
      </ul>
      <Typography variant="body1" paragraph>
        Thank you for visiting our page. We look forward to collaborating with you!
      </Typography>
      <Button variant="contained" color="primary" onClick={() => alert('Learn more about us!')}>
        Learn More
      </Button>
    </Box>
  );
};

export default AboutUs;
