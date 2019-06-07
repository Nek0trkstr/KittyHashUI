import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <header className="NavBarHeader">
                    <img src="favicon.ico" alt="logo" className="navIcon"></img>
                    <nav>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default NavBar;