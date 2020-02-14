import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

function Counter({ currentlyListening }) {
  return (
    <div id="counter">
      <p>
        Currently streaming:
        <span>{currentlyListening}</span>
      </p>
    </div>
  );
}

Counter.propTypes = {
  currentlyListening: PropTypes.number.isRequired,
};

export default Counter;
