const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  chapter_id: { type: String, required: true },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  name: { type: String, required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
