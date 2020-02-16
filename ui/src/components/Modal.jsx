import React from 'react';
import PropTypes from 'prop-types';
import English from '../Strings';
import './Modal.css';

function Modal({ userConsentGiven, handleClick }) {
  if (userConsentGiven) {
    return null;
  }
  return (
    <div id="userConsentModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>User Agreement</h2>
        </div>
        <div className="modal-body">
          <p>{English.disclaimer}</p>
        </div>
        <div className="modal-footer">
          <button onClick={handleClick} className="modalButton" type="button">I Agree</button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  userConsentGiven: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Modal;
