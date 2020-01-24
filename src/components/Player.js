import React, {Component} from 'react';
import './Player.css'
class Player extends Component {
    constructor(){
        super()
        this.audioController = <audio preload="none" id="playerController" src="http://localhost/basic-radio.ogg"><p> Your browser doesnt support audio player</p></audio>
        this.switchPlayPause = this.switchPlayPause.bind(this)
    }
    render() {
        return(
            <div className="player">
                {this.audioController}
                <button id='playButton' onClick={this.switchPlayPause}><i className="fas fa-play fa-7x"></i></button>
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