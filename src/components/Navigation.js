import React from 'react';
import 'bulma/css/bulma.css';
import logo from '../images/logo.png';

function Navigation() {
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://samet-aslan.de/">
                    <img src={logo}/>
                </a>
            </div>
        </nav>
    );
}
export default Navigation;