import React from 'react';
import NavBar from './NavBar';
import AppBody from './AppBody';
import './App.css';
import TextType from '../TextTypeEnum';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textToDisplay: TextType.ABOUT,
    };
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick(textToDisplay) {
    this.setState(() => { 
      return ({textToDisplay: textToDisplay});
    });
  }

  render() {
    const { textToDisplay } = this.state;
    return (
      <div className="App">
        <NavBar textToDisplay={textToDisplay} handleMenuClick={this.menuClick} />
        <AppBody textToDisplay={textToDisplay} />
      </div>
    );
  }
}

export default App;
