const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['teacher', 'student'], required: true },
  assigned_classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }], // For students
  created_classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }] // For teachers
});

const User = mongoose.model('User', userSchema);

module.exports = User;
