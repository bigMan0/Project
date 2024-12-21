const express = require('express');
const router = express.Router();
const interactiveLessonController = require('../controllers/interactiveLessonController');

// Routes for Interactive Lessons
router.post('/interactive-lessons', interactiveLessonController.createInteractiveLesson); // Create a lesson
router.get('/interactive-lessons', interactiveLessonController.getInteractiveLessons); // Get all lessons
router.get('/interactive-lessons/:id', interactiveLessonController.getInteractiveLessonById); // Get lesson by ID
router.put('/interactive-lessons/:id', interactiveLessonController.updateInteractiveLesson); // Update lesson by ID
router.delete('/interactive-lessons/:id', interactiveLessonController.deleteInteractiveLesson); // Delete lesson by ID

module.exports = router;
