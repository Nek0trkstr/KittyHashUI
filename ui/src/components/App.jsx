import React from 'react';
import NavBar from './NavBar';
import AppBody from './AppBody';
import TextType from '../TextTypeEnum';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textToDisplay: TextType.ABOUT,
    };
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick(textToDisplay) {
    this.setState({ textToDisplay });
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
