const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Routes for Questions
router.post('/', questionController.createQuestion); // Create a question
router.get('/', questionController.getQuestions); // Get all questions
router.get('/:id', questionController.getQuestionById); // Get question by ID
router.put('/:id', questionController.updateQuestion); // Update question by ID
router.delete('/:id', questionController.deleteQuestion); // Delete question by ID

module.exports = router;
