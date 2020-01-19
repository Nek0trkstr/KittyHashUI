import React, { Component } from 'react';
import NavBar from './NavBar';
import Info from './Info';
import Player from './Player';
import Counter from './Counter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Info />
        <Player />
        <Counter />
      </div>
    );
  }
}

export default App;
