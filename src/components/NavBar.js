import React, {Component} from 'react';
import Branding from './Branding';
import './NavBar.css'
import Info from './Info';

class NavBar extends Component {
    render(){
        return(
            <div className="NavBar">
                <h1>LOGO</h1>
                <div>
                    <button>About</button>
                    <button>Contact</button>
                </div>
            </div>
            
        )
    }
}

export default NavBar;