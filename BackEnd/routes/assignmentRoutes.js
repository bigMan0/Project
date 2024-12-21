const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

// Routes for Assignments
router.post('/assignments', assignmentController.createAssignment); // Create an assignment
router.get('/assignments', assignmentController.getAssignments); // Get all assignments
router.get('/assignments/:id', assignmentController.getAssignmentById); // Get assignment by ID
router.put('/assignments/:id', assignmentController.updateAssignment); // Update assignment by ID
router.delete('/assignments/:id', assignmentController.deleteAssignment); // Delete assignment by ID

module.exports = router;
