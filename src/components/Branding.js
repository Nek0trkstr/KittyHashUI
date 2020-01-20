import React from 'react';
import './Branding.css';

class Branding extends React.Component{
    render() {
        return(
            <div id="brand">
                <h1>LOGO</h1>
                <div>
                    <h2 id="brandName">KittyHash</h2>
                    <h2>Listen to music - help nature</h2>
                </div>
            </div>
        )
    }
}

export default Branding;