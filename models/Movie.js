let mongoose = require('mongoose');

//Movie schema
let movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  stars: {
    type: Array,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  showtimes: {
    type: Array,
    required: true
  }
});

let Movie = module.exports = mongoose.model('Movie', movieSchema);