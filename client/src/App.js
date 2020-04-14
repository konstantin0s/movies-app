
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from './components/Movies';
import Movie from './components/Movie';
import AddMovie from './components/AddMovie';
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
  <Route path="/one/:id" component={Movie} />  {/*Show a single article */}
  </Switch>
      <Footer />
 </div>
</Router>
    
    )
  }
}
