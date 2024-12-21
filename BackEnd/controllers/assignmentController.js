const Assignment = require('../models/Assignment');

// Create a new assignment
const createAssignment = async (req, res) => {
  try {
    const newAssignment = new Assignment(req.body);
    await newAssignment.save();
    res.status(201).json(newAssignment);
  } catch (err) {
    res.status(400).json({ error: 'Error creating assignment' });
  }
};

// Get all assignments
const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json(assignments);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching assignments' });
  }
};

// Get an assignment by ID
const getAssignmentById = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) return res.status(404).json({ error: 'Assignment not found' });
    res.status(200).json(assignment);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching assignment' });
  }
};

// Update an assignment by ID
const updateAssignment = async (req, res) => {
  try {
    const updatedAssignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAssignment) return res.status(404).json({ error: 'Assignment not found' });
    res.status(200).json(updatedAssignment);
  } catch (err) {
    res.status(400).json({ error: 'Error updating assignment' });
  }
};

// Delete an assignment by ID
const deleteAssignment = async (req, res) => {
  try {
    const deletedAssignment = await Assignment.findByIdAndDelete(req.params.id);
    if (!deletedAssignment) return res.status(404).json({ error: 'Assignment not found' });
    res.status(200).json({ message: 'Assignment deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting assignment' });
  }
};

module.exports = { createAssignment, getAssignments, getAssignmentById, updateAssignment, deleteAssignment };
