const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

// Routes for Analytics
router.post('/', analyticsController.createAnalytics); // Create an analytics entry
router.get('/', analyticsController.getAnalytics); // Get all analytics data
router.get('/:id', analyticsController.getAnalyticsById); // Get analytics data by ID
router.put('/:id', analyticsController.updateAnalytics); // Update analytics data by ID
router.delete('/:id', analyticsController.deleteAnalytics); // Delete analytics data by ID

module.exports = router;
