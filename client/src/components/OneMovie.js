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
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import Moment from "moment";
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
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Are you sure</h1>
            <p>You want to delete this file?</p>
            <Button
        variant="contained"
        color="primary"
             onClick={onClose}>No</Button>
            <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          this.handleClickDelete()
          onClose()
        }}
        startIcon={<DeleteIcon />}
      >
       Yes, Delete!
      </Button>
          </div>
        )
      }
    })

  }

  handleClickDelete = () => {
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

      renderStars = () => {
        const { movie } = this.state;
        let starx = [];
        starx = movie.stars.toString();
        let result = starx.replace(/,/g, "");
      
        for (let i = 0; i < result.length; i++) {
       
return (
 <Box key={Math.random() * 10 - 1} component="fieldset" mb={3} borderColor="transparent">
    <Typography component="legend">Stars</Typography>
  
    <Rating name="read-only" precision={0.5}
    value={parseInt(result[i])} readOnly />
    </Box> 
)
        }
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

                { this.renderStars()} 
              </CardContent>

            </CardActionArea>
            <CardActions>
        
            <Typography variant="body2" color="textSecondary" component="p">
                       Showtimes: {" "} 
                       {Moment(movie.showtimes.dateFrom).format('YYYY-MM-DD')}
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
        onClick={() => {
          this.delete()
        }}
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
