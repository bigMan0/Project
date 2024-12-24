const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

// Routes for Assignments
router.post('/', assignmentController.createAssignment); // Create an assignment
router.get('/', assignmentController.getAssignments); // Get all assignments
router.get('/:id', assignmentController.getAssignmentById); // Get assignment by ID
router.put('/:id', assignmentController.updateAssignment); // Update assignment by ID
router.delete('/:id', assignmentController.deleteAssignment); // Delete assignment by ID

module.exports = router;
