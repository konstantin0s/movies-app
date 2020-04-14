import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './css/onemovie.css';


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
            
            <Card className="cardex">
             <CardActionArea>
            <CardContent className="image-card">
              <CardMedia
                component="img"
                alt="Movie"
                height="400"
                image={movie.image}
                title={movie.title}
              />
            </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Description
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
               {movie.description}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Director
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
               {movie.director}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Stars
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
               {movie.stars}
                </Typography>
              </CardContent>

            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Showtimes:
              </Button>
              <Button size="small" color="primary">
               {movie.showtimes}
              </Button>
            </CardActions>
          </Card>



//             <div>
//              <div className="card text-center" key={movie._id}>
//   <div className="card-body">
//     <img alt="Movie" className="movie-img" src={movie.image} />
//     <h2 className="card-title">{movie.title}</h2>
//        <p className="description">
//          {movie.description}
//     </p> 
//   </div>

  
//   {/* <div className="card-footer text-muted">
//      <span> Posted: {Moment(article.date.dateFrom).format('YYYY-MM-DD')}</span> 
//   </div> */}

// </div>
//             </div>
        )
    }
}


export default OneMovie;
