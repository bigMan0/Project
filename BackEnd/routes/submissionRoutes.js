const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');

// Routes for Submissions
router.post('/submissions', submissionController.createSubmission); // Create a submission
router.get('/submissions', submissionController.getSubmissions); // Get all submissions
router.get('/submissions/:id', submissionController.getSubmissionById); // Get submission by ID
router.put('/submissions/:id', submissionController.updateSubmission); // Update submission by ID
router.delete('/submissions/:id', submissionController.deleteSubmission); // Delete submission by ID

module.exports = router;
