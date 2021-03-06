import React from 'react';
import 'bulma/css/bulma.css';
import FA from 'react-fontawesome';
import MyAvatar from './MyAvatar';

function Cover(){
    return(
        <section className="herois-fullheight has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile" id="headtitle">
                                Full-Stack Web & App Developer
                            </h1>
                            <h3 className="subtitle is-size-4-desktop">
                                An open minded developer who likes to turn ideas into reality.
                            </h3>
                            <MyAvatar></MyAvatar>
                            <h3 className="title is-5">
                                Samet Aslan
                            </h3>
                            <h5 className="subtitle is-7">
                                currently employed by 
                                <a href="https://accenture.com/" target="_blank" rel="noreferrer" id="job-status-link"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png" alt="accenture logo"/></a>
                            </h5>
                            
                            <div className="buttons is-centered are-small">
                                <a className="button is-rounded" href="https://github.com/Samet-Aslan" target="_blank" rel="noreferrer">
                                    <span className="icon is-small">
                                        <FA name="github"/>
                                    </span>
                                    <span>
                                        GitHub
                                    </span>
                                </a>
                                <a className="button is-link is-rounded" href="https://www.linkedin.com/in/samet-aslan-795382140/" target="_blank" rel="noreferrer">
                                    <span className="icon is-small">
                                        <FA name="linkedin"/>
                                    </span>
                                    <span>
                                        LinkedIn
                                    </span>
                                </a>
                                <a className="button is-success is-rounded" href="mailto:me@samet-aslan.de">
                                    <span className="icon is-small">
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