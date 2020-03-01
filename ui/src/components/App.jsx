import React from 'react';
import Cookies from 'universal-cookie';
import NavBar from './NavBar';
import AppBody from './AppBody';
import Modal from './Modal';
import TextType from '../TextTypeEnum';
import Info from './Info';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    const cookies = new Cookies();
    this.state = {
      textToDisplay: TextType.ABOUT,
      userConsentGiven: (cookies.get('userConsent') === 'true'),
    };
    this.menuClickHandler = this.menuClickHandler.bind(this);
    this.userConsentClickHandler = this.userConsentClickHandler.bind(this);
  }

  menuClickHandler(textToDisplay) {
    this.setState({ textToDisplay });
  }

  userConsentClickHandler() {
    const cookies = new Cookies();
    const date = new Date();
    cookies.set('userConsent', true, { path: '/', expires: new Date(date.setMonth(date.getMonth() + 1)) });
    this.setState({ userConsentGiven: true });
  }

  render() {
    const { textToDisplay, userConsentGiven } = this.state;
    return (
      <div className="App">
        <Modal userConsentGiven={userConsentGiven} handleClick={this.userConsentClickHandler} />
        <NavBar textToDisplay={textToDisplay} handleMenuClick={this.menuClickHandler} />
        <Info textToDisplay={textToDisplay} />
        <AppBody />
      </div>
    );
  }
}

export default App;
