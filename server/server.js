const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For password hashing
const saltRounds = 10; // Number of rounds for hashing

const app = express();
const PORT = process.env.PORT || 3500;

const MONGO_URI = 'mongodb://localhost:27017/fashion'; // Replace with your database name

// Enable CORS for requests from your frontend
app.use(cors({
  origin: 'http://localhost:3000', // Allow only frontend origin for security
  methods: ['GET', 'POST'], // Allowed HTTP methods
  credentials: true,
}));

// Middleware to handle JSON data
app.use(bodyParser.json());

// MongoDB connection setup
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB on localhost!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model for User
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true }, // Passwords will be hashed
  userType: { type: String, enum: ['user', 'artist'], required: true },
  address: { type: String },
  city: { type: String },
  region: { type: String },
  country: { type: String },
  textileExpertise: { type: String },
  pricing: { type: String },
  productionTime: { type: String }
});

const User = mongoose.model('User', userSchema);

// Registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    const {
      name, email, phone, password, userType,
      address, city, region, country,
      textileExpertise, pricing, productionTime
    } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      userType,
      address,
      city,
      region,
      country,
      textileExpertise,
      pricing,
      productionTime
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Verify the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
