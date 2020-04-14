import React, { Component } from 'react';
import axios from 'axios';

 class OneMovie extends Component {
constructor(props) {
    super(props);

    this.state = {
        movie: [],
        isLoading: true
    }
}

  
      oneMovie = () => {
        const { id } = this.props;
        console.log(id);
        this.setState(state => ({ ...state, isLoading: true }));
    
        axios
          .get(`/one/${id}`)
          .then(res => {
            const movie = res.data;
            console.log(movie)
            this.setState({
                movie: movie,
              isLoading: false,
            
            });
          })
          .catch(err => console.log(err));
      };

      componentDidMount() {
          this.oneMovie();
      }


    render() {
console.log(this.state.movie);
        const { movie} = this.state;
console.log(movie);
        return (

            <div>
             <div className="card text-center" key={movie._id}>
  <div className="card-body">
    <img alt="Movie" className="movie-img" src={movie.image} />
    <h2 className="card-title">{movie.title}</h2>
       <p className="description">
         {movie.description}
    </p> 
  </div>

  
  {/* <div className="card-footer text-muted">
     <span> Posted: {Moment(article.date.dateFrom).format('YYYY-MM-DD')}</span> 
  </div> */}

</div>
            </div>
        )
    }
}


export default OneMovie;