var mongoose = require('mongoose');
var DefinitionSchema = new mongoose.Schema({
  frenchString: String,
  japaneseString: String,
  definition: String,
  isPublished:Boolean,
  updated_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Definition', DefinitionSchema);