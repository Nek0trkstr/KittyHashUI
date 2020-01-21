import React, { Component } from 'react';
import NavBar from './NavBar';
import Info from './Info';
import Player from './Player';
import Counter from './Counter'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      textToDisplay: 'about'
    };
    this.menuClick = this.menuClick.bind(this);
  }
  render() {
    return (
      <div className="App">
        <NavBar textToDisplay={this.state.textToDisplay} handleMenuClick={this.menuClick}/>
        <Info textToDisplay={this.state.textToDisplay}/>
        <Player />
        <Counter />
      </div>
    );
  }

  menuClick(i_TextToDisplay){
    this.setState((prevState) => {
      return {textToDisplay: i_TextToDisplay};
    })
  }
}

export default App;
