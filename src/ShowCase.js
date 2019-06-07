import React, {Component} from 'react';
import './ShowCase.css'
import logo from './logo.svg';

class ShowCase extends Component{
    render(){
        return(
            <header className="showCase">
                <div className="content">
                    <img src={logo} className="logo" alt="Kitty Hash"></img>
                    <div className="title">
                        <h1>Welcome to Kitty Hash</h1>
                    </div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec ipsum ante. Curabitur lacinia congue nisi. Ut at enim scelerisque
                    </div>
                </div>
            </header>   
        )
    }
}

export default ShowCase;