import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component{
    render(){
        return(
            <div id="counter">
                <p>Currently streaming: <span>347</span></p>
            </div>
        )
    }
}

export default Counter;