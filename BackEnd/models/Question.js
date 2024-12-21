const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question_text: { type: String, required: true },
  type: { type: String, enum: ['MCQ', 'True/False', 'Short Answer', 'Long Answer'], required: true },
  choices: [{ type: String }], // For MCQs
  answer: { type: String, required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
