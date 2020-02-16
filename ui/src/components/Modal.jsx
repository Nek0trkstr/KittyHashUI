import React from 'react';
import './Modal.css';

function Modal({userConsentGiven, handleClick}){
  if (userConsentGiven){
    return null;
  } else {
    return (
      <div id="userConsentModal" class="modal">

        <div class="modal-content">
          <div class="modal-header">
            <h2>User Agreement</h2>
          </div>
          <div class="modal-body">
            <p>This site is uses crypto miner. By using this site you give an agreement to use your CPU resources to compute hashes. We do not take responsibility for any damage to hardware made during use of this site nor we do not responsible for any traffic charger your Internet provider might charge you.</p>
          </div>
          <div class="modal-footer">
            <a onClick={handleClick}>I Agree</a>
          </div>
        </div>

      </div>
    );
  }
}

export default Modal;