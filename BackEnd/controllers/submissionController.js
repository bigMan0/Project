const Submission = require('../models/Submission');

// Create a new submission
const createSubmission = async (req, res) => {
  try {
    const newSubmission = new Submission(req.body);
    await newSubmission.save();
    res.status(201).json(newSubmission);
  } catch (err) {
    res.status(400).json({ error: 'Error creating submission' });
  }
};

// Get all submissions
const getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.status(200).json(submissions);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching submissions' });
  }
};

// Get a submission by ID
const getSubmissionById = async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) return res.status(404).json({ error: 'Submission not found' });
    res.status(200).json(submission);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching submission' });
  }
};

// Update a submission by ID
const updateSubmission = async (req, res) => {
  try {
    const updatedSubmission = await Submission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSubmission) return res.status(404).json({ error: 'Submission not found' });
    res.status(200).json(updatedSubmission);
  } catch (err) {
    res.status(400).json({ error: 'Error updating submission' });
  }
};

// Delete a submission by ID
const deleteSubmission = async (req, res) => {
  try {
    const deletedSubmission = await Submission.findByIdAndDelete(req.params.id);
    if (!deletedSubmission) return res.status(404).json({ error: 'Submission not found' });
    res.status(200).json({ message: 'Submission deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting submission' });
  }
};

module.exports = { createSubmission, getSubmissions, getSubmissionById, updateSubmission, deleteSubmission };
