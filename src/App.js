import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route ,Redirect,Switch } from 'react-router-dom';
import Login from "./container/login"
import Register from "./container/register"
import Home from "./container/Home"
class App extends Component {
  render() {
    return (
      <div>
        
          <Route path="/" exact component={Home}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          {/* <Redirect to="/" /> */}
        
      </div>
      
    );
  }
}

export default App;
