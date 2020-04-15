import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './css/movie.css';

const Movie = (props) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    


  
    
        console.log(props.movie);

        const { title, director, image, description, stars, showtimes, _id } = props.movie;
       
        return (
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="movie" className={classes.avatar}>
                    M
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={title}
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image={image}
                title="Mive"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
               Director: {" "} {director}
                </Typography>
                <Avatar aria-label="movie" className={classes.link}>
              >
                  </Avatar>
                  <Link className="linkz" id={_id} to={`/one/${_id}`}>
                Read More...
                </Link>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton id="expanding"
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                   {description}
                  </Typography>
                  <Typography paragraph>
                  Stars: {" "} {stars}
                  </Typography>
                  <Typography paragraph>
                   Showtimes: {" "} {showtimes}
                  </Typography>
                  <Typography>
                      
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          );

}


export default  Movie;

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    link: {
        backgroundColor: blue[500],
        position: 'relative',
        top: '28px',
        left: '3em'
      }
  }));