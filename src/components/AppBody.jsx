import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import Player from './Player';
import Counter from './Counter';
import './AppBody.css';
import TextType from '../TextTypeEnum';

class AppBody extends React.Component {
  static parseMetadata(jsonMetadata) {
    // Song data on the server is of the form 'Artist - Songname' and should be parsed
    const songInfo = jsonMetadata.icestats.source.title.split('-');
    const songArtist = songInfo[0].trim();
    const songTitle = songInfo[1].trim();
    return (
      {
        songTitle,
        songArtist,
        currentlyListening: jsonMetadata.icestats.source.listeners,
      }
    );
  }

  constructor() {
    super();
    this.state = {
      songTitle: 'Loading',
      songArtist: 'Loading',
      currentlyListening: '',
    };
    this.pollingInterval = 5000;
    this.radioMetadataURL = `http://${window.location.hostname}/status-json.xsl`;
    this.pollMetaFromStreamServer = this.pollMetaFromStreamServer.bind(this);
  }

  componentDidMount() {
    this.pollMetaFromStreamServer();
    setInterval(this.pollMetaFromStreamServer, this.pollingInterval);
  }

  pollMetaFromStreamServer() {
    fetch(this.radioMetadataURL)
      .then((res) => res.json())
      .then((jsonMetadata) => this.constructor.parseMetadata(jsonMetadata))
      .then((parsedData) => {
        this.setState(() => {
          return ({
            songTitle: parsedData.songTitle,
            songArtist: parsedData.songArtist,
            currentlyListening: parsedData.currentlyListening,
          });
        });
      });
  }

  render() {
    const { textToDisplay, songArtist, songTitle } = this.props;
    console.log(textToDisplay, songArtist, songTitle);
    const { currentlyListening } = this.state;
    return (
      <div id="appBody">
        <Info textToDisplay={textToDisplay} />
        <Player songArtist={songArtist} songTitle={songTitle} />
        <Counter currentlyListening={currentlyListening} />
      </div>
    );
  }
}

AppBody.propTypes = {
  textToDisplay: PropTypes.instanceOf(TextType).isRequired,
  songArtist: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
};

export default AppBody;
