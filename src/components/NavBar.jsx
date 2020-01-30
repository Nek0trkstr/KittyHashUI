import React from 'react';
import PropTypes from 'prop-types';
import TextType from '../TextTypeEnum';
import './NavBar.css';

function NavBar({ textToDisplay, handleMenuClick }) {
  return (
    <div id="navBar">
      <h1>LOGO</h1>
      <div id="navButtons">
        <button className={textToDisplay === TextType.ABOUT ? 'buttonActive' : ''} onClick={() => handleMenuClick(TextType.ABOUT)} type="button">About</button>
        <button className={textToDisplay === TextType.CONTACT ? 'buttonActive' : ''} onClick={() => handleMenuClick(TextType.CONTACT)} type="button">Contact</button>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  textToDisplay: PropTypes.instanceOf(TextType).isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default NavBar;
