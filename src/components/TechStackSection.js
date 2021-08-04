import React from "react";
import 'bulma/css/bulma.css';
import FA from 'react-fontawesome';
import java from '../images/java.png';
import react from '../images/react.png';
import php from '../images/php.png';
import js from '../images/js.png';
import bulma from '../images/bulma.png';
import spring from '../images/spring.png';
import swift from '../images/swift.png';
import swiftui from '../images/swiftui.png';
import kotlin from '../images/kotlin.png';
import jandroid from '../images/androidwithjava.png';
import wp from '../images/wp.png';


class Section extends React.Component{
    render(){
        return(
                <div>
                    <section class="section has-text-centered" id="techstack-con">
                        <div class="hero-body">
                            <div class="container">
                                <div class="columns is-centered">
                                    <div class="column is-full">
                                        <h1 class="title is-spaced is-size-2-desktop is-size-3-tablet is-size-3-mobile">
                                            Technologies
                                        </h1>
                                    </div>
                                </div>
                                
                                <div class="columns is-vcentered is-centered is-multiline is-moible" id="techstack-column">
                                    <div class="column is-narrow">
                                        <img src={js} class="stack-logo"/>
                                        <h2 className="subtitle">JavaScript</h2>
                                    </div>

                                    <div class="column is-narrow">                             
                                        <img src={php} class="stack-logo"/>
                                        <h2 className="subtitle">PHP</h2>                                   
                                    </div>
                                    <div class="column is-narrow">
                                        <img src={react} class="stack-logo"/>
                                        <h2 className="subtitle">ReactJS</h2>  
                                    </div>
                                    <div class="column is-narrow">
                                        <img src={wp} class="stack-logo"/>
                                        <h2 className="subtitle">WordPress</h2>    
                                    </div>
                                    
                                    <div class="column is-narrow">  
                                        <img src={java} class="stack-logo"/>
                                        <h2 className="subtitle">Java</h2>
                                    </div>
                                    <div class="column is-narrow">    
                                        <img src={jandroid} class="stack-logo"/>
                                        <h2 className="subtitle">Java for Android</h2>
                                    </div>
                                    <div class="column is-narrow">
                                        <img src={swift} class="stack-logo"/>
                                        <h2 className="subtitle">Swift</h2>
                                    </div>
                                    <div class="column is-narrow">
                                        <img src={swiftui} class="stack-logo"/>
                                        <h2 className="subtitle">SwiftUI</h2>
                                    </div>
                                </div>
                               
                              
                            </div>

                        </div>
                    </section>
            </div>
        );
    }
}
export default Section;