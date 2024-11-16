// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Paper,
  Grid,
  Avatar,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#1e1e1e', // Match with Home.js background color
  },
  paper: {
    padding: '32px',
    maxWidth: '400px',
    width: '100%',
    backgroundColor: '#222', // Darker paper background for contrast
    color: 'white', // Text color to match the theme
  },
  avatar: {
    margin: '16px',
    backgroundColor: 'primary.main',
  },
  button: {
    marginTop: '16px',
  },
  link: {
    marginTop: '16px',
    color: '#90caf9', // Lighter blue color for the link
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      alert('Login successful!');
      // Redirect to a different page or save user data as needed
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : error.message);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <Box sx={styles.container}>
      <Paper elevation={3} sx={styles.paper}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={styles.avatar}>
            <LockIcon />
          </Avatar>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLogin} style={{ width: '100%' }}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputLabelProps={{
                style: { color: 'white' }, // White label for better visibility
              }}
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // White border color
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9', // Lighter blue color on focus
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#90caf9', // Lighter blue color for the focused label
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputLabelProps={{
                style: { color: 'white' }, // White label for better visibility
              }}
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // White border color
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9', // Lighter blue color on focus
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#90caf9', // Lighter blue color for the focused label
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={styles.button}
            >
              Login
            </Button>
          </form>
          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Grid item>
              <Link href="/signup" variant="body2" sx={styles.link}>
                Don't have an account? Create Account
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
