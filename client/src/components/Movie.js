import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Sharing from './Sharing';
import './css/movie.css';
import axios from 'axios';
import Moment from 'moment';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';

const Movie = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  let [count, setCount] = React.useState(props.movie.likes);
  let [incCount] = React.useState(0);

  const incLikes = () => {
    let newCount = props.movie.likes + 1;

    if (newCount >= 1) {
      let apath = document.getElementsByClassName('icon-button');

      for (let i = 0; i < apath.length; i++) {
        apath[i].style.color = 'red';
      }
    }

    // setCount(newCount => newCount++);
    setCount((count) => count + 1);
    console.log(count, incCount, newCount);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    const { likes, _id } = props.movie;
    console.log(count, likes, _id);
    axios.put(`/movie/edit/${_id}/like`, { likes: count }).then((result) => {
      console.log(result.data);
    });
  };

  const { title, director, image, description, showtimes, _id, likes } = props.movie;
  //  console.log(props.movie)
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
      <ReactFancyBox className={classes.media} thumbnail={image} image={image} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Director: {director}
        </Typography>
        <Avatar aria-label="movie" className={classes.link}>
          >
        </Avatar>
        <Link className="linkz" id={_id} to={`/one/${_id}`}>
          Read More...
        </Link>
      </CardContent>
      <CardActions disableSpacing>
        <form onSubmit={handleSubmit}>
          <IconButton aria-label="add to favorites" type="submit" onClick={incLikes}>
            <FavoriteIcon name="movieId" className="icon-button" />
          </IconButton>
        </form>
        Likes: {count ? count : likes}
        <CardContent aria-label="share">
          <Sharing />
        </CardContent>
        <IconButton
          id="expanding"
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
          <Typography paragraph>{description}</Typography>

          <Typography paragraph>Showtimes: {Moment(showtimes).format('YYYY-MM-DD')}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Movie;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
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
    left: '3em',
  },
}));
