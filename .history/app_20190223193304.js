const express = require('express');
const hbs     = require('hbs');
const path    = require('path');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/movies', { useNewUrlParser: true });
let db = mongoose.connection;

//check connection
db.once('open', () => {
  console.log('Connected to MongoDb');
});

db.on('error', (err) => {
    console.log(err);
})


/* GET home page */
const index = require('./routes/index');
app.use('/', index);


app.listen(3000, () => {
  console.log('Server started on port 3000');
})