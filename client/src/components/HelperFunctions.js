import axios from 'axios';


export const movies = newMovie => {
    return axios.post(`/add`, {
      title: newMovie.title,
      director: newMovie.director,
      description: newMovie.description,
      image: newMovie.image,
      stars: newMovie.stars,
      showtimes: newMovie.showtimes
    })
    .then(res => {

      console.log('Movie added!');
      console.log(newMovie);
    });
  };
  
  
  export const handleUpload = theFile => {
  
      // console.log('file in service: ', theFile);
    return  axios.post(`/upload`, theFile)
        .then(res => res.data)
        .catch(err => {
          console.log(err);
        });
  };
  