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
    this.menuClick = this.menuClick.bind(this);
    this.userConsentClick = this.userConsentClick.bind(this);
  }

  menuClick(textToDisplay) {
    this.setState({ textToDisplay });
  }

  userConsentClick() {
    const cookies = new Cookies();
    const date = new Date();
    cookies.set('userConsent', true, { path: '/', expires: new Date(date.setMonth(date.getMonth() + 1)) });
    this.setState({ userConsentGiven: true });
  }

  render() {
    const { textToDisplay, userConsentGiven } = this.state;
    return (
      <div className="App">
        <Modal userConsentGiven={userConsentGiven} handleClick={this.userConsentClick} />
        <NavBar textToDisplay={textToDisplay} handleMenuClick={this.menuClick} />
        <Info textToDisplay={textToDisplay} />
        <AppBody />
      </div>
    );
  }
}

export default App;
