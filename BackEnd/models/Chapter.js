const chapterSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
    name: { type: String, required: true },
    resources: [{ type: String }],  // List of resource links or filenames
    assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }] // References Assignment collection
  });
  
  const Chapter = mongoose.model('Chapter', chapterSchema);
  
  module.exports = Chapter;
  