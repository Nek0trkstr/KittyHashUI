import React, {Component} from 'react';

import './NavBar.css'

class NavBar extends Component {
    render(){
        return(
            <div className="NavBar">
                <h1>LOGO</h1>
                <div id="navButtons">
                    <button  autofocus="true" onClick={() => this.props.handleMenuClick('about')}>About</button>
                    <button onClick={() => this.props.handleMenuClick('contact')}>Contact</button>
                </div>
            </div>
            
        )
    }
}

export default NavBar;