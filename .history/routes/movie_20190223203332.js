const express = require('express');
const router  = express.Router();
let Movies = require('../models/Movie');

router.get('/movie/:id', (req, res, next) => {
  Movies.$all({_id: req.params.id}, (err, movie) => {
    if (err) {
      console.log(err);
    } else {
      res.render('movie',
      {movie: movie});
    }
    
  });
});

module.exports = router;