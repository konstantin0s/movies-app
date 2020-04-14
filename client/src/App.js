
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from './components/Movies';
import Movie from './components/Movie';
import AddMovie from './components/AddMovie';
import OneMovie from './components/OneMovie';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {


  render() {

    return (
   
<Router>
<div className="App">
<Header />
  <Switch>

<Route exact path="/"  component={Movies} />
  <Route exact path="/add" component={AddMovie} />
  <Route 
        path="/one/:id" 
        render={request => {
          const id = request.match.params.id;
          console.log(id);
          return <OneMovie id={id} />;
        }}
      />


  </Switch>
      <Footer />
 </div>
</Router>
    
    )
  }
}
