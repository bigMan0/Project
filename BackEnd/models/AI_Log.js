const mongoose = require('mongoose');

const aiLogSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['question_generation', 'grading'], required: true },
  details: {
    input: { type: String, required: true },
    output: [{ type: String }]
  },
  timestamp: { type: Date, required: true }
});

const AI_Log = mongoose.model('AI_Log', aiLogSchema);

module.exports = AI_Log;
