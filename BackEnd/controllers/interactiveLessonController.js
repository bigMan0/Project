const InteractiveLesson = require('../models/InteractiveLesson');

// Create a new interactive lesson
const createInteractiveLesson = async (req, res) => {
  try {
    const newLesson = new InteractiveLesson(req.body);
    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (err) {
    res.status(400).json({ error: 'Error creating interactive lesson' });
  }
};

// Get all interactive lessons
const getInteractiveLessons = async (req, res) => {
  try {
    const lessons = await InteractiveLesson.find();
    res.status(200).json(lessons);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching interactive lessons' });
  }
};

// Get an interactive lesson by ID
const getInteractiveLessonById = async (req, res) => {
  try {
    const lesson = await InteractiveLesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ error: 'Lesson not found' });
    res.status(200).json(lesson);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching interactive lesson' });
  }
};

// Update an interactive lesson by ID
const updateInteractiveLesson = async (req, res) => {
  try {
    const updatedLesson = await InteractiveLesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLesson) return res.status(404).json({ error: 'Lesson not found' });
    res.status(200).json(updatedLesson);
  } catch (err) {
    res.status(400).json({ error: 'Error updating interactive lesson' });
  }
};

// Delete an interactive lesson by ID
const deleteInteractiveLesson = async (req, res) => {
  try {
    const deletedLesson = await InteractiveLesson.findByIdAndDelete(req.params.id);
    if (!deletedLesson) return res.status(404).json({ error: 'Lesson not found' });
    res.status(200).json({ message: 'Interactive lesson deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting interactive lesson' });
  }
};

module.exports = { createInteractiveLesson, getInteractiveLessons, getInteractiveLessonById, updateInteractiveLesson, deleteInteractiveLesson };
