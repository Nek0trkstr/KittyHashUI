import React from 'react';
import AnimatedText from './AnimatedText';
import TextType from '../TextTypeEnum';
import './Info.css';

class Info extends React.Component {
  constructor() {
    super();
    this.activeButtonToElement = {
      [TextType.ABOUT]:
      <p>
          KittyHash is a platfrom that brings handpicked music
           for you to be present and focus on task at hand.
          Meanwhile volunteering your underutilized compute power
           to help animals in need all over the world.
      </p>,
      [TextType.CONTACT]: <p>Yo yo contact me!!!</p>,
    };
  }

  render() {
    return (
      <div id="Info">
        <div id="brandInfo">
          <h2 id="brandName">KittyHash</h2>
          <h2 id="brandSlogan">Listen to music - help nature</h2>
        </div>
        <AnimatedText textToDisplay={this.activeButtonToElement[this.props.textToDisplay]} />
      </div>
    );
  }
}

export default Info;
