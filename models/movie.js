var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: String,
  releaseYear: {
    type: Number,
    default: 2000
  },
  mpaaRating: String,
  cast: [String],
  nowShowing: {
    type: Boolean,
    default: false
  }
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema);

