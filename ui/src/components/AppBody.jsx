import React from 'react';
import Player from './Player';
import Counter from './Counter';
import './AppBody.css';

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
      currentlyListening: 0,
    };
    this.pollingInterval = 5000;
    this.radioMetadataURL = `https://${window.location.hostname}/status-json.xsl`;
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
        this.setState({
          songTitle: parsedData.songTitle,
          songArtist: parsedData.songArtist,
          currentlyListening: parsedData.currentlyListening,
        });
      })
      .catch((err) => console.log(`Error occured while polling metadata ${err}`));
  }

  render() {
    const { currentlyListening, songArtist, songTitle } = this.state;
    return (
      <div id="appBody">
        <Player songArtist={songArtist} songTitle={songTitle} />
        <Counter currentlyListening={currentlyListening} />
      </div>
    );
  }
}

export default AppBody;
