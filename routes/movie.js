const express = require('express');
const router  = express.Router();
let Movies = require('../models/Movie');

router.get('/movie/:id', (req, res, next) => {
  Movies.findOne({_id: req.params.id}, (err, movie) => {
    if (err) {
      console.log(err);
    } else {
      res.render('movie',
      {movie: movie});
    }
    
  });
});

//Edit single Movie
router.put('/movie/edit/:id', function(req, res, next) {
  debugger
  Movies.findByIdAndUpdate(req.params.id, req.body, function (err, movie) {
    debugger
    if (err) return next(err);
    res.json(movie);
    debugger
  });
});

//@route Delete Article
router.delete('/:id', (req, res) => {
  Movies.findById(req.params.id)
 .then(movie => movie.remove().then(() => res.json({success: true})))
 .catch(err => res.status(404).json({success: false}));
});


// update likes 
router.put('/movie/edit/:id/like', (req, res) => {
  debugger
  Movies.findByIdAndUpdate(req.params.id, req.body, function (err, movie) {
    debugger
    if (err) return next(err);
    res.json(movie);
    debugger
  });
});




module.exports = router;