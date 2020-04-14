const express = require('express');
const router  = express.Router();
let Movie = require('../models/Movie');



/* GET movies page */
router.get('/movies', (req, res, next) => {

  Movie.find()
  .sort({ date: -1 })
  .then((movies) => {
    res.json(movies);
  })
  .catch(err => {
    res.json(err);
  })
 
});

//add submit POST route
router.post('/add', (req, res) => {
  debugger
  const today = new Date();
  const newMovie = new Movie({
    title: req.body.title,
    director: req.body.director,
    description: req.body.description,
    image: req.body.image,
    stars: req.body.stars,
    showtimes: req.body.showtimes,
    created: today
  }); 
  console.log(newMovie)
  debugger
  newMovie.save().then(movie => res.json(movie))
   .catch(err => {
    debugger
    res.json(err);
    })
});


module.exports = router;
