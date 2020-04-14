import axios from 'axios';

export const movies = newMovie => {
    return axios.post(`/movies`, {
      title: newMovie.title,
      director: newMovie.director,
      description: newMovie.description,
      image: newMovie.image,
      stars: newMovie.stars,
      showtimes: newMovie.showtimes
    }, {withCredentials: true})
    .then(res => {
      console.log('Movie added!');
    });
  };
  
  
  export const handleUpload = theFile => {
  
      // console.log('file in service: ', theFile);
    return  axios.post(`/upload`, theFile,  {withCredentials: true})
        .then(res => res.data)
        .catch(err => {
          console.log(err);
        });
  };
  