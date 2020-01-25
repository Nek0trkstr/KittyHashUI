import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component{
    render(){
        return(
            <div id="counter">
                <p>Currently streaming: <span>{this.props.currentlyListening}</span></p>
            </div>
        )
    }
}

export default Counter;