const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');

// Routes for Submissions
router.post('/', submissionController.createSubmission); // Create a submission
router.get('/', submissionController.getSubmissions); // Get all submissions
router.get('/:id', submissionController.getSubmissionById); // Get submission by ID
router.put('/:id', submissionController.updateSubmission); // Update submission by ID
router.delete('/:id', submissionController.deleteSubmission); // Delete submission by ID

module.exports = router;
