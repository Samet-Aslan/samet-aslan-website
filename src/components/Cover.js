import React from 'react';
import 'bulma/css/bulma.css';
import FA from 'react-fontawesome';
import MyAvatar from './MyAvatar';
import logo from '../images/logo.png';


function Cover(){

    return(
        <section class="herois-fullheight has-text-centered">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column">
                            <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                                Full-Stack Web & App Developer
                            </h1>
                            <h3 class="subtitle is-4-desktop">
                                An open minded developer who likes to turn ideas into reality.
                            </h3>
                            <MyAvatar></MyAvatar>
                            <p class="subtitle is-5">
                                Samet Aslan
                            </p>
                            
                            <div class="buttons is-centered are-small">
                                <a class="button is-rounded" href="https://github.com/Samet-Aslan" target="_blank">
                                    <span class="icon is-small">
                                        <FA name="github"/>
                                    </span>
                                    <span>
                                        GitHub
                                    </span>
                                </a>
                                <a class="button is-link is-rounded" href="https://www.linkedin.com/in/samet-aslan-795382140/" target="_blank">
                                    <span class="icon is-small">
                                        <FA name="linkedin"/>
                                    </span>
                                    <span>
                                        LinkedIn
                                    </span>
                                </a>
                                <a class="button is-success is-rounded" href="mailto:me@samet-aslan.de">
                                    <span class="icon is-small">
                                        <FA name="envelope"/>
                                    </span>
                                    <span>
                                        E-Mail
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default Cover;