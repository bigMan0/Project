const express = require('express');
const router = express.Router();
const aiLogController = require('../controllers/aiLogController');

// Routes for AI Logs
router.post('/ai-logs', aiLogController.createAILog); // Create an AI log entry
router.get('/ai-logs', aiLogController.getAILogs); // Get all AI log entries
router.get('/ai-logs/:id', aiLogController.getAILogById); // Get AI log by ID
router.put('/ai-logs/:id', aiLogController.updateAILog); // Update AI log by ID
router.delete('/ai-logs/:id', aiLogController.deleteAILog); // Delete AI log by ID

module.exports = router;
