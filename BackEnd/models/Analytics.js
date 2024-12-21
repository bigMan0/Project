const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  chapter_progress: [{
    chapter_id: { type: String, required: true },
    status: { type: String, enum: ['completed', 'in_progress'], required: true }
  }]
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
