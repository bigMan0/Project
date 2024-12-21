const Question = require('../models/Question');

// Create a new question
const createQuestion = async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ error: 'Error creating question' });
  }
};

// Get all questions
const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching questions' });
  }
};

// Get a question by ID
const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ error: 'Question not found' });
    res.status(200).json(question);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching question' });
  }
};

// Update a question by ID
const updateQuestion = async (req, res) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedQuestion) return res.status(404).json({ error: 'Question not found' });
    res.status(200).json(updatedQuestion);
  } catch (err) {
    res.status(400).json({ error: 'Error updating question' });
  }
};

// Delete a question by ID
const deleteQuestion = async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    if (!deletedQuestion) return res.status(404).json({ error: 'Question not found' });
    res.status(200).json({ message: 'Question deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting question' });
  }
};

module.exports = { createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion };
