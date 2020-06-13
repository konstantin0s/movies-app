import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './css/header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  function changeBackColor() {
    let buttons = document.querySelectorAll('[name=color]');
    for (let button of Array.from(buttons)) {
      button.addEventListener('change', () => {
        document.body.style.background = button.value;
      });
    }
  }

  function showHide() {
    let classix = document.querySelector('.change-color');
    classix.classList.toggle('show');
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <form className="change-color">
            <label>
              <input type="radio" onClick={changeBackColor} name="color" value="orange" /> Orange
            </label>
            <label>
              <input type="radio" onClick={changeBackColor} name="color" value="lightgreen" /> Green
            </label>
            <label>
              <input type="radio" onClick={changeBackColor} name="color" value="lightblue" /> Blue
            </label>
          </form>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={showHide}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/"> MoviePlex</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/add">Add Movies</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
