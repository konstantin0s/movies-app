const express = require('express');
const router  = express.Router();
let Movies = require('../models/Movie');



/* GET movies page */

router.get('/movies', (req, res, next) => {
  Movies.find({}, (err, movies) => {
    if (err) {
      console.log(err);
    } else {
      res.render('movies',
      {movies: movies});
      console.log('ecoo', movies);
    }
    
  });
});

module.exports = router;
