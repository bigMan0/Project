const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // To load environment variables
const cors = require('cors'); // Import CORS

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your Vue app
  credentials: true, // Allow cookies to be sent with requests
}));

// Handle preflight requests (OPTIONS method) for all routes
app.options('*', cors()); // This will handle preflight requests for all routes

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
const submissionRoutes = require('./routes/submissionRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');
const questionRoutes = require('./routes/questionRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

// Use routes
app.use('/users', userRoutes);
app.use('/classes', classRoutes);
app.use('/submissions', submissionRoutes);
app.use('/assignments', assignmentRoutes);
app.use('/questions', questionRoutes);
app.use('/analytics', analyticsRoutes);

// Sample API for testing
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
