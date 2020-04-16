
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Movies from './components/Movies';
import EditMovie from './components/EditMovie';
import AddMovie from './components/AddMovie';
import OneMovie from './components/OneMovie';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {


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
<Route path="/edit/:id" component={EditMovie} />

  </Switch>
      <Footer />
 </div>
</Router>
    
    )
  }
}


const AppWithRouter = withRouter(App);

export default AppWithRouter;