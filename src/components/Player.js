import React, {Component} from 'react';
import './Player.css'
class Player extends Component {
    constructor(){
        super()
        this.audioController = <audio id="playerController" src="http://localhost:8000/basic-radio.ogg"><p> Your browser doesnt support audio player</p></audio>
        this.switchPlayPause = this.switchPlayPause.bind(this)
    }
    render() {
        return(
            <div className="player">
                {this.audioController}
                <button id='playButton' onClick={this.switchPlayPause}>Play/Pause</button>
            </div>
        )
    }

    switchPlayPause() {
        let playerController = document.getElementById('playerController')
        if (playerController.paused ){
            playerController.play()
        }
        else {
            playerController.pause()
        }
    }
}

export default Player;