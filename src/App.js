import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import ShowCase from './ShowCase'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ShowCase />
      </div>
    );
  }
}

export default App;
