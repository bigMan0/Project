const Class = require('../models/Class');

// Create a new class
const createClass = async (req, res) => {
  try {
    const newClass = new Class(req.body);
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(400).json({ error: 'Error creating class' });
  }
};

// Get all classes
const getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching classes' });
  }
};

// Get a class by ID
const getClassById = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.id);
    if (!classData) return res.status(404).json({ error: 'Class not found' });
    res.status(200).json(classData);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching class' });
  }
};

// Update a class by ID
const updateClass = async (req, res) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedClass) return res.status(404).json({ error: 'Class not found' });
    res.status(200).json(updatedClass);
  } catch (err) {
    res.status(400).json({ error: 'Error updating class' });
  }
};

// Delete a class by ID
const deleteClass = async (req, res) => {
  try {
    const deletedClass = await Class.findByIdAndDelete(req.params.id);
    if (!deletedClass) return res.status(404).json({ error: 'Class not found' });
    res.status(200).json({ message: 'Class deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting class' });
  }
};

module.exports = { createClass, getClasses, getClassById, updateClass, deleteClass };
