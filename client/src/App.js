
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from './components/Movies';
import Header from './components/Header';
import './App.css';

export default class App extends Component {


  render() {

    return (
   
<Router>
<div className="App">
<Header />
  <Switch>

<Route exact path="/" />
  <Route exact path="/movies" component={Movies} />
  </Switch>
      
 </div>
</Router>
    
    )
  }
}
