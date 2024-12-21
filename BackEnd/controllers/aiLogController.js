const AI_Log = require('../models/AI_Log');

// Create a new AI log entry
const createAILog = async (req, res) => {
  try {
    const newAILog = new AI_Log(req.body);
    await newAILog.save();
    res.status(201).json(newAILog);
  } catch (err) {
    res.status(400).json({ error: 'Error creating AI log' });
  }
};

// Get all AI log entries
const getAILogs = async (req, res) => {
  try {
    const aiLogs = await AI_Log.find();
    res.status(200).json(aiLogs);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching AI logs' });
  }
};

// Get an AI log entry by ID
const getAILogById = async (req, res) => {
  try {
    const aiLog = await AI_Log.findById(req.params.id);
    if (!aiLog) return res.status(404).json({ error: 'AI log not found' });
    res.status(200).json(aiLog);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching AI log' });
  }
};

// Update an AI log by ID
const updateAILog = async (req, res) => {
  try {
    const updatedAILog = await AI_Log.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAILog) return res.status(404).json({ error: 'AI log not found' });
    res.status(200).json(updatedAILog);
  } catch (err) {
    res.status(400).json({ error: 'Error updating AI log' });
  }
};

// Delete an AI log by ID
const deleteAILog = async (req, res) => {
  try {
    const deletedAILog = await AI_Log.findByIdAndDelete(req.params.id);
    if (!deletedAILog) return res.status(404).json({ error: 'AI log not found' });
    res.status(200).json({ message: 'AI log deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting AI log' });
  }
};

module.exports = { createAILog, getAILogs, getAILogById, updateAILog, deleteAILog };
