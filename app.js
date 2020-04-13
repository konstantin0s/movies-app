const express = require('express');
const hbs     = require('hbs');
const path    = require('path');
const mongoose = require('mongoose');
let Movie = require('./models/Movie');

require('dotenv').config();

const app = express();
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

// mongo db atlas - with the thisisthesunrise@gmail.com account
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
  

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

/*Get movies page */
const moviesP = require('./routes/movies');
app.use('/', moviesP);

/*Get singe movie page */
const movieP = require('./routes/movie');
app.use('/', movieP);


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port 5000...Happy Surfing`);
});


//close mongodb
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
});

module.exports = app;