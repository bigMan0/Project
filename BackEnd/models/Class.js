const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  name: { type: String, required: true },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }] // References Chapter collection
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
