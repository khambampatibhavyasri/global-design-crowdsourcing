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
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#1e1e1e',
  },
  paper: {
    padding: '32px',
    maxWidth: '800px',
    width: '100%',
    backgroundColor: '#222',
    color: 'white',
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
    color: '#90caf9',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('user'); // Default to 'user'
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [textileExpertise, setTextileExpertise] = useState('');
  const [pricing, setPricing] = useState('');
  const [productionTime, setProductionTime] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    const userData = {
      name,
      email,
      phone,
      password,
      address,
      city,
      region,
      country,
      textileExpertise,
      pricing,
      productionTime,
      userType,
    };

    try {
      const response = await axios.post('http://localhost:3500/api/register', userData);
      console.log('User registered successfully:', response.data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register. Please try again.');
    }
  };

  return (
    <Box sx={styles.container}>
      <Paper elevation={3} sx={styles.paper}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={styles.avatar}>
            <PersonAddIcon />
          </Avatar>
          <Typography variant="h5" gutterBottom>
            Create Account
          </Typography>

          {/* User Type Selection */}
          <FormLabel component="legend" sx={{ color: 'white' }}>
            I am a:
          </FormLabel>
          <RadioGroup
            row
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            sx={{ color: 'white', marginBottom: '16px' }}
          >
            <FormControlLabel value="user" control={<Radio sx={{ color: '#90caf9' }} />} label="User" />
            <FormControlLabel value="artist" control={<Radio sx={{ color: '#90caf9' }} />} label="Artist" />
          </RadioGroup>

          <form onSubmit={handleSignup} style={{ width: '100%' }}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              InputLabelProps={{
                style: { color: 'white' },
              }}
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#90caf9',
                },
              }}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputLabelProps={{
                style: { color: 'white' },
              }}
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#90caf9',
                },
              }}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              InputLabelProps={{
                style: { color: 'white' },
              }}
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#90caf9',
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
                style: { color: 'white' },
              }}
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#90caf9',
                },
              }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              InputLabelProps={{
                style: { color: 'white' },
              }}
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#90caf9',
                },
              }}
            />

            {/* Additional Fields for Artist */}
            {userType === 'artist' && (
              <>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Address"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white',
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#90caf9',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#90caf9',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="City"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white',
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#90caf9',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#90caf9',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Region"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      required
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white',
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#90caf9',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#90caf9',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Country"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white',
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#90caf9',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#90caf9',
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Textile Expertise Field */}
                <Typography variant="h6" gutterBottom sx={{ marginTop: '16px', color: 'white' }}>
                  Textile Expertise
                </Typography>
                <TextField
                  label="Type of Expertise (Weaving, Embroidery, Hand Painting)"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={textileExpertise}
                  onChange={(e) => setTextileExpertise(e.target.value)}
                  required
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#90caf9',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#90caf9',
                    },
                  }}
                />

                <TextField
                  label="Pricing"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={pricing}
                  onChange={(e) => setPricing(e.target.value)}
                  required
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#90caf9',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#90caf9',
                    },
                  }}
                />
                <TextField
                  label="Production Time"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={productionTime}
                  onChange={(e) => setProductionTime(e.target.value)}
                  required
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#90caf9',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#90caf9',
                    },
                  }}
                />
              </>
            )}
            <Button type="submit" variant="contained" color="primary" sx={styles.button}>
              Sign Up
            </Button>
          </form>
          <Link href="#" sx={styles.link}>
            Already have an account? Log in
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Signup;
