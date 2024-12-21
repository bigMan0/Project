const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Routes for Questions
router.post('/questions', questionController.createQuestion); // Create a question
router.get('/questions', questionController.getQuestions); // Get all questions
router.get('/questions/:id', questionController.getQuestionById); // Get question by ID
router.put('/questions/:id', questionController.updateQuestion); // Update question by ID
router.delete('/questions/:id', questionController.deleteQuestion); // Delete question by ID

module.exports = router;
