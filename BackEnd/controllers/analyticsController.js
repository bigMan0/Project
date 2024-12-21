const Analytics = require('../models/Analytics');

// Create new analytics entry
const createAnalytics = async (req, res) => {
  try {
    const newAnalytics = new Analytics(req.body);
    await newAnalytics.save();
    res.status(201).json(newAnalytics);
  } catch (err) {
    res.status(400).json({ error: 'Error creating analytics entry' });
  }
};

// Get all analytics data
const getAnalytics = async (req, res) => {
  try {
    const analytics = await Analytics.find();
    res.status(200).json(analytics);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching analytics' });
  }
};

// Get analytics data by ID
const getAnalyticsById = async (req, res) => {
  try {
    const analyticsData = await Analytics.findById(req.params.id);
    if (!analyticsData) return res.status(404).json({ error: 'Analytics data not found' });
    res.status(200).json(analyticsData);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching analytics data' });
  }
};

// Update analytics data by ID
const updateAnalytics = async (req, res) => {
  try {
    const updatedAnalytics = await Analytics.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAnalytics) return res.status(404).json({ error: 'Analytics data not found' });
    res.status(200).json(updatedAnalytics);
  } catch (err) {
    res.status(400).json({ error: 'Error updating analytics' });
  }
};

// Delete analytics data by ID
const deleteAnalytics = async (req, res) => {
  try {
    const deletedAnalytics = await Analytics.findByIdAndDelete(req.params.id);
    if (!deletedAnalytics) return res.status(404).json({ error: 'Analytics data not found' });
    res.status(200).json({ message: 'Analytics data deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting analytics data' });
  }
};

module.exports = { createAnalytics, getAnalytics, getAnalyticsById, updateAnalytics, deleteAnalytics };
