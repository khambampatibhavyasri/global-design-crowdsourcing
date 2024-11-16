import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useMessages } from '../context/MessageContext'; // Import context

const RecentPrompts = () => {
  const { messages } = useMessages(); // Access messages from context

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bgcolor="#1e1e1e" color="white" p={2}>
      <Typography variant="h4" gutterBottom>
        Recent Prompts
      </Typography>
      <Box width="100%" maxWidth="600px">
        {messages.length === 0 ? (
          <Typography variant="body1">No recent prompts available.</Typography>
        ) : (
          messages.map((message, index) => (
            <Paper key={index} elevation={2} sx={{ padding: 2, marginBottom: 1, bgcolor: '#333', color: 'white' }}>
              {message}
            </Paper>
          ))
        )}
      </Box>
    </Box>
  );
};

export default RecentPrompts;
