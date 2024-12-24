const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  chapter_id: { type: String, required: true },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  name: { type: String, required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  due_date: { type: Date, required: true }, 
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
