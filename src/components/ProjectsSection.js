import React from "react";
import 'bulma/css/bulma.css';
import FA from 'react-fontawesome';
import spring from '../images/spring.png';
import liya from '../images/liya.store.PNG';
import ernstberger from '../images/ernstberger.PNG';

class ProjectSection extends React.Component{

    render(){

        return(

            <div>

                    <section class="section is-small has-text-centered" id="projects-con">
                        <div class="hero-body">
                            <div class="container">
                                <div class="columns">
                                    <div class="column is-full">
                                        <h1 class="title is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">
                                            My Projects
                                        </h1>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div class="column is-half has-text-left">
                                        <h1 class="title is-spaced is-size-3-desktop is-size-4-tablet is-size-5-mobile">
                                            LIYA.STORE
                                        </h1>
                                        <h2 class="subtitle">
                                            Liya.Store is a shop for women clothing. It is built with WooCommerce and Elementor. A custom dashboard has been developed with PHP and JavaScript.
                                        </h2>
                                    </div>
                                    <div class="column">
                                        <img src={liya} className="project-image"/>    
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    
                                    <div class="column">
                                        <img src={ernstberger} className="project-image"/>    
                                    </div>
                                    <div class="column is-half has-text-left">
                                        <h1 class="title is-spaced is-size-3-desktop is-size-4-tablet is-size-5-mobile">
                                            ERNSTBERGERJONAS.DE
                                        </h1>
                                        <h2 class="subtitle">
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