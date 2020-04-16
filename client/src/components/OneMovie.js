import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Loading from './Loading';
import './css/onemovie.css';


 class OneMovie extends Component {
constructor(props) {
    super(props);

    this.state = {
        movie: [],
        isLoading: true
    }
}

  delete = () => {
    // console.log(id);
    axios.delete(`/${this.state.movie._id}`)
      .then((result) => {
        this.props.history.push(`/`);
      });
  }

  
      oneMovie = () => {
        const { id } = this.props;
        // console.log(id);
        this.setState(state => ({ ...state, isLoading: true }));
    
        axios
          .get(`/one/${id}`)
          .then(res => {
            const movie = res.data;
            // console.log(movie)
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

        const { movie, isLoading} = this.state;

        return (
            
      
      <div className="text-center">
           {  isLoading ? <Loading /> : 
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
        
            <Typography variant="body2" color="textSecondary" component="p">
                       Showtimes: {" "}   {movie.showtimes}
            </Typography>

            </CardActions>
            <CardContent>
                  <div className="button-container"> 
                  <Button
        variant="contained"
        color="default"
        startIcon={<EditIcon />}>
           <Link to={`/edit/${this.state.movie._id}`} className="btn btn-success">Edit</Link>&nbsp;
           </Button>
      

          <Button
        variant="contained"
        color="secondary"
        className="btn btn-danger"
        onClick={this.delete.bind(this, this.state.movie._id)}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
       </div>
               </CardContent>
          </Card>
    }
      </div>



        )
    }
}


export default withRouter(OneMovie);
