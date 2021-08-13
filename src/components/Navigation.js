import React from 'react';
import 'bulma/css/bulma.css';
import logo from '../images/logo-white.png';

function Navigation() {
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://samet-aslan.de/">
                    <img src={logo} alt="Header Logo of Samet Aslan"/>
                </a>
            </div>
        </nav>
    );
}
export default Navigation;