import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Movie from './Movie';
import axios from 'axios';
import './css/movies.css';

 class Movies extends Component {
     constructor(props) {
         super(props);
         this.state = {
             movies: [],
             isLoading: true
         }
     }

     moviesList = () => {
        this.setState(state => ({ ...state, isLoading: true }));
    
        axios
          .get(`/movies`)
          .then(res => {
            const movies = res.data;
            this.setState({
                movies: movies,
              isLoading: false,
            
            });
          })
          .catch(err => console.log(err));
      };

      componentDidMount() {
          this.moviesList();
      }

    render() {
        const { movies, isLoading } = this.state;
        console.log(movies);
        return (
            <div className="movies-container">

{          isLoading ? <Loading /> :


movies.map((movie) =>   
<Movie id={movie._id} movie={movie} />

/* <div className="card text-center" key={movie._id}>
  <div className="card-body">
    <img alt="Movie" className="movie-img" src={movie.image} />
    <h2 className="card-title">{movie.title}</h2>
    {/* <p className="description">
        {movie.description}
    </p> 
  </div>
   <span className="artLink">  <Link className="btn btn-primary linkz" to={`/one/${movie._id}`}>Read MORE...</Link></span>
  <div className="card-footer text-muted">
   {/* <span> Posted: {Moment(article.date.dateFrom).format('YYYY-MM-DD')}</span> 
  </div>

</div> */
)}
              


            </div>
        )
    }
}


export default Movies;