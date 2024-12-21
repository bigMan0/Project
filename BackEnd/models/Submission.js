const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  assignment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment', required: true },
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  submitted_at: { type: Date, required: true },
  grade: { type: Number },
  feedback: { type: String }
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
