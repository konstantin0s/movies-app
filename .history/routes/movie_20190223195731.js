const express = require('express');
const router  = express.Router();
let Movies = require('../models/Movie');

router.get('/movie/:id', (req, res, next) => {
  Movies.find({}, (err, movie) => {
    if (err) {
      console.log(err);
    } else {
      res.render('movie',
      {movie: movie});
    }
    
  });
});

module.exports = router;