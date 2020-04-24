import React, { Component } from 'react';
import Loading from './Loading';
import Movie from './Movie';
import axios from 'axios';
import './css/movies.css';

 class Movies extends Component {
     constructor(props) {
         super(props);
         this.state = {
             movies: [],
             isLoading: true,
             searchText: '',
             term: ''
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

      searchingFor = term => {
          return (holding) => {
              return holding.title.includes(term) || !term;
          }
      }

      jsUcfirst = str => {
          return str.charAt(0).toUpperCase() + str.slice(1);
      }

      onSearchChange = e => {
          this.setState({
            searchText: this.jsUcfirst(e.target.value),
            term: this.jsUcfirst(e.target.value)
          });
      }

      handleSubmit = e => {
          e.preventDefault();
          this.performSearch(this.query.value);
          e.currentTarget.reset();
          this.setState({searchText: ''});
      }

    render() {
        const { movies, isLoading, searchText, term } = this.state;

        return (

            <div>
                                        
                <div className="contain-form">

                    <form className="search-form" onSubmit={this.handleSubmit}>

                    <input
                    onChange={this.onSearchChange}
                    id="searchField"
                    type="text"
                    value={searchText}
                    autoComplete="true"
                    ref={input => (this.query = input)}
                    placeholder="Enter City Name"
                    aria-label="Search"
                    />

                    <div className="search"></div>
                    </form>

                </div>

                <div className="movies-container">

                {  isLoading ? <Loading /> :
                movies.filter(this.searchingFor(term)).map((movie) =>   
                <Movie key={movie._id} id={movie._id} movie={movie} />
                )}


                </div>
            </div>

        )
    }
}


export default Movies;