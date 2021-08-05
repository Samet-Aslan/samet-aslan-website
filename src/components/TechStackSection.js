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
import TitleSubtitle from "./TitleSubtitle";


class Section extends React.Component{
    render(){
        return(
                <div>
                    <section className="section has-text-centered" id="techstack-con">
                        <div className="hero-body">
                            <div className="container">
                                <TitleSubtitle title="Technologies" subtitle="In the following you can see the technologies I like to use for web and app development."/>
                                
                                <div className="columns is-vcentered is-centered is-multiline is-moible" id="techstack-column">
                                    <div className="column is-narrow">
                                        <img src={js} className="stack-logo"/>
                                        <h2 className="subtitle">JavaScript</h2>
                                    </div>

                                    <div className="column is-narrow">                             
                                        <img src={php} className="stack-logo"/>
                                        <h2 className="subtitle">PHP</h2>                                   
                                    </div>
                                    <div className="column is-narrow">
                                        <img src={react} className="stack-logo"/>
                                        <h2 className="subtitle">ReactJS</h2>  
                                    </div>
                                    <div className="column is-narrow">
                                        <img src={wp} className="stack-logo"/>
                                        <h2 className="subtitle">WordPress</h2>    
                                    </div>
                                    
                                    <div className="column is-narrow">  
                                        <img src={java} className="stack-logo"/>
                                        <h2 className="subtitle">Java</h2>
                                    </div>
                                    <div className="column is-narrow">    
                                        <img src={jandroid} className="stack-logo"/>
                                        <h2 className="subtitle">Java for Android</h2>
                                    </div>
                                    <div className="column is-narrow">
                                        <img src={swift} className="stack-logo"/>
                                        <h2 className="subtitle">Swift</h2>
                                    </div>
                                    <div className="column is-narrow">
                                        <img src={swiftui} className="stack-logo"/>
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