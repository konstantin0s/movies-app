const express = require('express');
const hbs     = require('hbs');
const path    = require('path');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/nodekb', { useNewUrlParser: true });
let db = mongoose.connection;

//check connection
db.once('open', () => {
  console.log('Connected to MongoDb');
});

db.on('error', (err) => {
    console.log(err);
})

const app = express();

/* GET home page */
app.get('/', (req, res) => {
  res.render('index');
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
})