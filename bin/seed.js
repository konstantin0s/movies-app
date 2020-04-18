let faker = require('faker');
    let Movie = require('../models/Movie');
    const mongoose = require('mongoose');
    require('dotenv').config();

    // connect to MongoDB
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(x => {
      console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
      console.error('Error connecting to mongo', err)
    });
    
  

    // remove all data from the collection first
    Movie.remove({})
        .then(() => {
            let movies = [];
            for (let i = 0; i < 30; i++) {
                movies.push({
                    title: faker.name.title(),
                    director: faker.name.findName(),
                    actor: faker.name.findName(),
                    description: faker.lorem.sentence(),
                    image: faker.image.image(),
                    showtimes: Math.round(Math.random() * 9),
                    likes: Math.round(Math.random() * 9)
                }); 
            }
            return Movie.create(movies);
        })
        .then(() => {
            console.log('The seeds are planted :)')
            process.exit();
        })
        .catch((e) => {
            console.log(e);
            process.exit(1);
        });