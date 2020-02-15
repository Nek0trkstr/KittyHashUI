/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import './Player.css';

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
    };
    this.radioURL = `http://${window.location.hostname}/basic-radio`;
    this.audioController = new Audio(this.radioURL);
    this.playStream = this.playStream.bind(this);
    this.stopStream = this.stopStream.bind(this);
  }

  playStream() {
    this.setState({ isPlaying: true });
    this.audioController.src = this.radioURL;
    this.audioController.play();
  }

  stopStream() {
    this.setState({ isPlaying: false });
    this.audioController.pause();
    this.audioController.src = '';
  }

  render() {
    const { songTitle, songArtist } = this.props;
    const { isPlaying } = this.state;
    return (
      <div className="player">
        <button id="playButton" aria-label="Play Button" type="button" onClick={isPlaying ? this.stopStream : this.playStream}><i className={isPlaying ? 'fas fa-pause fa-7x' : 'fas fa-play fa-7x'} /></button>
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
