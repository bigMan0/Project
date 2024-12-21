const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  name: { type: String, required: true },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  chapters: [{
    chapter_id: { type: String, required: true },
    name: { type: String, required: true },
    quiz_questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
  }]
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
