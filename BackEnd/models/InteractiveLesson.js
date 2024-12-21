const mongoose = require('mongoose');

const interactiveLessonSchema = new mongoose.Schema({
  chapter_id: { type: String, required: true },
  completed_by: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  prerequisite_assignment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }
});

const InteractiveLesson = mongoose.model('InteractiveLesson', interactiveLessonSchema);

module.exports = InteractiveLesson;
