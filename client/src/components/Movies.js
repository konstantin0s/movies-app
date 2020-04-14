import React, { Component } from 'react';
import axios from 'axios';

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
        const { movies } = this.state;
        console.log(movies);
        return (
            <div>
                <h2>movies list</h2>
            </div>
        )
    }
}


export default Movies;