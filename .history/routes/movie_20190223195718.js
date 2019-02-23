const express = require('express');
const router  = express.Router();
let Movies = require('../models/Movie');

router.get('/movie/:id', (req, res, next) => {
  Movies.find({}, (err, movies) => {
    if (err) {
      console.log(err);
    } else {
      res.render('movies',
      {movies: movies});
    }
    
  });
});

module.exports = router;