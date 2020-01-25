import React, { Component } from 'react';
import NavBar from './NavBar';
import Info from './Info';
import Player from './Player';
import Counter from './Counter'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      textToDisplay: 'about',
      songTitle: 'Loading',
      songArtist: '',
      currentlyListening: ''
    };
    this.menuClick = this.menuClick.bind(this);
    this.parseMetadata = this.parseMetadata.bind(this);
    this.pollMetaFromStreamServer = this.pollMetaFromStreamServer.bind(this);
  }

  render() {
    return (
      <div className="App">
        <NavBar textToDisplay={this.state.textToDisplay} handleMenuClick={this.menuClick}/>
        <Info textToDisplay={this.state.textToDisplay}/>
        <Player songArtist={this.state.songArtist} songTitle={this.state.songTitle}/>
        <Counter currentlyListening={this.state.currentlyListening}/>
      </div>
    );
  }

  menuClick(i_TextToDisplay){
    this.setState((prevState) => {
      return {textToDisplay: i_TextToDisplay};
    })
  }

  componentDidMount(){
    setInterval(this.pollMetaFromStreamServer, 3000)
  }

  pollMetaFromStreamServer(){
    fetch('http://localhost:8000/status-json.xsl')
    .then(res => res.json())
    .then((jsonMetadata) => this.parseMetadata(jsonMetadata))
    .then(parsedData => {
      this.setState(() => {
        return (
          {
            songTitle: parsedData.songTitle,
            songArtist: parsedData.songArtist,
            currentlyListening: parsedData.currentlyListening
          }
        )
      })
    })
  }

  parseMetadata(jsonMetadata){
    // Song data on the server is of the form 'Artist - Songname' and should be parsed
    let songInfo = jsonMetadata.icestats.source.title.split('-')
    let songArtist = songInfo[0].trim()
    let songTitle = songInfo[1].trim()
    return (
      {
        songTitle: songTitle,
        songArtist: songArtist,
        currentlyListening: jsonMetadata.icestats.source.listeners
      }
    )
  }
}

export default App;
