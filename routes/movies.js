const express = require('express');
const router  = express.Router();
let Movies = require('../models/Movie');



/* GET movies page */
router.get('/movies', (req, res, next) => {

  Movies.find()
  .sort({ date: -1 })
  .then((movies) => {
    res.json(movies);
  })
  .catch(err => {
    res.json(err);
  })
 
});

module.exports = router;
