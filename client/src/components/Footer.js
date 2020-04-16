import React from 'react';
import './css/footer.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

 function Footer() {
    
  const classes = useStyles();

        return (
  

<div className={classes.root} id="footer">
<AppBar position="static">
  <Toolbar>
    <Typography variant="h6" className={classes.title}>
    &copy; Copyright 2020 <Link to="/"> MoviePlex</Link>
    </Typography>
  </Toolbar>
</AppBar>
</div>
        )
    
}

export default Footer;
