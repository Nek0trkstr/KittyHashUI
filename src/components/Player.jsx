import React from 'react';
import PropTypes from 'prop-types';
import './Player.css';

class Player extends React.Component {
  constructor() {
    super();
    this.radioURL = `http://${window.location.hostname}/basic-radio`;
    this.audioController = <audio id="playerController" src={this.radioURL}><p> Your browser doesnt support audio player</p></audio>;
    this.switchPlayPause = this.switchPlayPause.bind(this);
  }

  switchPlayPause() {
    const playerController = document.getElementById('playerController');
    const playerButton = document.getElementById('playButton');
    if (playerController.paused) {
      playerButton.style.animationPlayState = 'running';
      playerButton.innerHTML = '<i class="fas fa-pause fa-7x"></i>';
      playerController.src = this.radioURL;
      playerController.play();
    } else {
      playerButton.style.animationPlayState = 'paused';
      playerButton.classList.remove('playButtonAnimated');
      playerButton.innerHTML = '<i class="fas fa-play fa-7x"></i>';
      playerController.pause();
      playerController.src = '';
    }
  }

  render() {
    const { songTitle, songArtist } = this.props;
    return (
      <div className="player">
        {this.audioController}
        <button id="playButton" aria-label="Play Button" type="button" onClick={this.switchPlayPause}><i className="fas fa-play fa-7x" /></button>
        <h1 id="songTitle">{songTitle}</h1>
        <h2 id="songArtist">{songArtist}</h2>
      </div>
    );
  }
}

Player.propTypes = {
  songTitle: PropTypes.string.isRequired,
  songArtist: PropTypes.string.isRequired,
};

export default Player;
