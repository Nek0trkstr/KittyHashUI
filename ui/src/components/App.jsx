import React from 'react';
import NavBar from './NavBar';
import AppBody from './AppBody';
import Modal from './Modal';
import TextType from '../TextTypeEnum';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textToDisplay: TextType.ABOUT,
      userConsentGiven: false,
    };
    this.menuClick = this.menuClick.bind(this);
    this.userConsentClick = this.userConsentClick.bind(this);
  }

  menuClick(textToDisplay) {
    this.setState({ textToDisplay });
  }

  userConsentClick() {
    this.setState({ userConsentGiven: true });
  }

  render() {
    const { textToDisplay, userConsentGiven } = this.state;
    return (
      <div className="App">
        <Modal userConsentGiven={userConsentGiven} handleClick={this.userConsentClick} />
        <NavBar textToDisplay={textToDisplay} handleMenuClick={this.menuClick} />
        <AppBody textToDisplay={textToDisplay} />
      </div>
    );
  }
}

export default App;
