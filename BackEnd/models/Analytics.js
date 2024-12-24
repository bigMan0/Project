const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  chapter_progress: [
    {
      chapter_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' },
      completed: { type: Boolean, default: false }, // true = completed, false = not completed
      completion_date: { type: Date }, // Optional: Date when the student completed the chapter
    }
  ],
  average_grade: { type: Number, default: 0 },
  total_assignments: { type: Number, default: 0 },
  completed_assignments: { type: Number, default: 0 },
  last_updated: { type: Date, default: Date.now },
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
