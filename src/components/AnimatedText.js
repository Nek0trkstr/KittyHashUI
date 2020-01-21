import React from 'react';
import './AnimatedText.css';

class AnimatedText extends React.Component {
    render() {
        return (
            <div id="animatedText">
                {this.props.textToDisplay}
            </div>
        );
    }
}

export default AnimatedText;