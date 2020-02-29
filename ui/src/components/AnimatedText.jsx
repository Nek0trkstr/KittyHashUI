import React from 'react';
import PropTypes from 'prop-types';
import './AnimatedText.css';

function AnimatedText({ textToDisplay }) {
  return (
    <div id="animatedText">
      {textToDisplay}
    </div>
  );
}

AnimatedText.propTypes = {
  textToDisplay: PropTypes.element.isRequired,
};

export default AnimatedText;
