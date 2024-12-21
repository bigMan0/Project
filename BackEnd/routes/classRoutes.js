const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// Routes for Classes
router.post('/', classController.createClass); // Create a class
router.get('/', classController.getClasses); // Get all classes
router.get('/:id', classController.getClassById); // Get class by ID
router.put('/:id', classController.updateClass); // Update class by ID
router.delete('/:id', classController.deleteClass); // Delete class by ID

module.exports = router;
