import React from 'react';
import 'bulma/css/bulma.css';
import logo from '../images/logo.png';

function Navigation() {
    return(
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://samet-aslan.de/">
                    <img src={logo} alt="Bulma: a modern CSS framework based on Flexbox"/>
                </a>
            </div>
        </nav>
    );
}
export default Navigation;