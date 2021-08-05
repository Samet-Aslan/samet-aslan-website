import React from "react";
import 'bulma/css/bulma.css';
import FA from 'react-fontawesome';
import spring from '../images/spring.png';
import liya from '../images/liya.store.PNG';
import ernstberger from '../images/ernstberger.PNG';
import TitleSubtitle from "./TitleSubtitle";

class ProjectSection extends React.Component{

    render(){

        return(
            <div>
                    <section className="section has-text-centered" id="projects-con">
                        <div className="hero-body">
                            <div className="container">
                                <TitleSubtitle title="Projects" subtitle="These are the projects I was mainly involved in."/>
                                <div className="columns is-vcentered" id="tobereversed">
                                    <div className="column is-half has-text-left">
                                        <h1 className="title is-spaced is-size-3-desktop is-size-4-tablet is-size-5-mobile">
                                            LIYA.STORE
                                        </h1>
                                        <h2 className="subtitle">
                                            Liya.Store is a shop for women clothing. It is built with WooCommerce and Elementor. A custom dashboard has been developed with PHP and JavaScript.
                                        </h2>
                                    </div>
                                    <div className="column">
                                        <a href="https://liya.store/" target="_blank"><img src={liya} className="project-image"/></a>
                                    </div>
                                </div>
                                
                                <div className="columns is-vcentered">
                                    <div className="column">
                                        <a href="https://ernstbergerjonas.de" target="_blank"><img src={ernstberger} className="project-image"/></a>
                                    </div>
                                    <div className="column is-half has-text-left">
                                        <h1 className="title is-spaced is-size-3-desktop is-size-4-tablet is-size-5-mobile">
                                            ERNSTBERGERJONAS.DE
                                        </h1>
                                        <h2 className="subtitle">
                                            ErnstbergerJonas is an advertising agency. The landing page is built with WordPress and Elementor.
                                        </h2>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

            </div>


        );

    }


}

export default ProjectSection;