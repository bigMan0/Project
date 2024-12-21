const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

// Routes for Analytics
router.post('/analytics', analyticsController.createAnalytics); // Create an analytics entry
router.get('/analytics', analyticsController.getAnalytics); // Get all analytics data
router.get('/analytics/:id', analyticsController.getAnalyticsById); // Get analytics data by ID
router.put('/analytics/:id', analyticsController.updateAnalytics); // Update analytics data by ID
router.delete('/analytics/:id', analyticsController.deleteAnalytics); // Delete analytics data by ID

module.exports = router;
