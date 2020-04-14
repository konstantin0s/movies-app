import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      width: '100%',
      backgroundColor: '#3f51b5',
      color: '#fff',
      bottom: '0',
      position: 'fixed'
    },
  });


export default function Footer() {

    const classes = useStyles();

    
        return (
            <BottomNavigation className={classes.root}>
    <p> 
         MoviePlex &copy; Copyright 2020
       </p>
            </BottomNavigation>
        )
    
}
