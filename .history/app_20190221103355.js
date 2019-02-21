const express = require('express');
const hbs     = require('hbs');
const path    = require('path');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/nodekb', { useNewUrlParser: true });
let db = mongoose.connection;

//check connection
db.once('open', function() {
  console.log('Connected to MongoDb');
});

db.on('error', function(err) {
    console.log(err);
})

const app = express();

app.listen(3000, function() {
  console.log('Server started on port 3000');
})