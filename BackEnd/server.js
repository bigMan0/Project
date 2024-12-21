const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // To load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Import routes
const userRoutes = require('./routes/userRoutes');
const classRoutes = require('./routes/classRoutes');

// Use routes
app.use('/users', userRoutes);
app.use('/classes', classRoutes); // For class-related routes


// Sample API for testing
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
