import React, {Component} from 'react';
import './Player.css'
class Player extends Component {
    constructor(){
        super()
        this.audioController = <audio id="playerController" src={`http://${window.location.hostname}:8000/basic-radio`}><p> Your browser doesnt support audio player</p></audio>
        this.switchPlayPause = this.switchPlayPause.bind(this)
    }
    render() {
        return(
            <div className="player">
                {this.audioController}
                <button id='playButton' onClick={this.switchPlayPause}><i className="fas fa-play fa-7x"></i></button>
                <h1 id="songTitle">{this.props.songTitle}</h1>
                <h2 id="songArtist">{this.props.songArtist}</h2>
            </div>
        )
    }

    switchPlayPause() {
        let playerController = document.getElementById('playerController');
        let playerButton = document.getElementById('playButton');
        if (playerController.paused ){
            playerButton.style.animationPlayState = 'running'
            playerButton.innerHTML = '<i class="fas fa-pause fa-7x"></i>'
            playerController.play();
        }
        else {
            playerButton.style.animationPlayState = 'paused'
            playerButton.classList.remove('playButtonAnimated');
            playerButton.innerHTML = '<i class="fas fa-play fa-7x"></i>'
            playerController.pause();
        }
    }
}

export default Player;