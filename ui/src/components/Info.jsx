import React from 'react';
import PropTypes from 'prop-types';
import AnimatedText from './AnimatedText';
import TextType from '../TextTypeEnum';
import English from '../Strings';
import './Info.css';

class Info extends React.Component {
  constructor() {
    super();
    this.activeButtonToElement = {
      [TextType.ABOUT]: <p>{ English.about }</p>,
      [TextType.CONTACT]: <p>{ English.contact }</p>,
    };
  }

  render() {
    const { textToDisplay } = this.props;
    return (
      <div id="Info">
        <div id="brandInfo">
          <h2 id="brandName">KittyHash</h2>
          <h2 id="brandSlogan">Listen to music - help nature</h2>
        </div>
        <AnimatedText textToDisplay={this.activeButtonToElement[textToDisplay]} />
      </div>
    );
  }
}

Info.propTypes = {
  textToDisplay: PropTypes.symbol.isRequired,
};

export default Info;
