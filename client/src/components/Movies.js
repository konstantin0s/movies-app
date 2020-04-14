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
<Movie key={movie._id} id={movie._id} movie={movie} />
)}
              


            </div>
        )
    }
}


export default Movies;