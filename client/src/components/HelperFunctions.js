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

      // console.log('Movie added!');
      // console.log(newMovie);
    });
  };
  
  
  export const handleUpload = theFile => {
  
    return  axios.post(`/upload`, theFile)
        .then(res => res.data)
        .catch(err => {
          console.log(err);
        });
  };
  

//    export const like = (params, movieId) => {
//   return fetch('/like/', {
//     method: 'PUT',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer '
//     },
//     body: JSON.stringify({movieId :params.movieId})
//   }).then((response) => {
//     return response.json()
//   }).catch((err) => {
//     console.log(err)
//   })
// }