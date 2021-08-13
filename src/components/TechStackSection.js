import React from "react";
import 'bulma/css/bulma.css';
import java from '../images/java.png';
import react from '../images/react.png';
import php from '../images/php.png';
import js from '../images/javascript.png';
import swift from '../images/swift.png';
import jandroid from '../images/android.png';
import wp from '../images/wordpress.png';
import TitleSubtitle from "./TitleSubtitle";
import css from "../images/css.png";


class Section extends React.Component{
    render(){
        return(
                <div>
                    <section className="section has-text-centered" id="techstack-con">
                        <div className="hero-body">
                            <div className="container">
                                <TitleSubtitle title="Technologies" subtitle="In the following you can see the technologies I like to use for web and app development."/>
                                
                                <div className="columns is-vcentered is-centered is-multiline" id="techstack-column">
                                    <div className="column is-narrow">
                                        <img src={js} className="stack-logo" alt="logo of JavaScript"/>
                                        <h2 className="subtitle is-size-6-desktop is-size-6-tablet is-size-7-mobile">JavaScript</h2>
                                    </div>

                                    <div className="column is-narrow">                             
                                        <img src={php} className="stack-logo" alt="logo of PHP"/>
                                        <h2 className="subtitle is-size-6-desktop is-size-6-tablet is-size-7-mobile">PHP</h2>                                   
                                    </div>
                                    <div className="column is-narrow">
                                        <img src={react} className="stack-logo" alt="logo of ReactJS"/>
                                        <h2 className="subtitle is-size-6-desktop is-size-6-tablet is-size-7-mobile">ReactJS</h2>  
                                    </div>
                                    <div className="column is-narrow">
                                        <img src={css} className="stack-logo" alt="logo of CSS"/>
                                        <h2 className="subtitle is-size-6-desktop is-size-6-tablet is-size-7-mobile">CSS</h2>
                                    </div>
                                    <div className="column is-narrow">
                                        <img src={wp} className="stack-logo" alt="logo of WordPress"/>
                                        <h2 className="subtitle is-size-6-desktop is-size-6-tablet is-size-7-mobile">WordPress</h2>    
                                    </div>
                                    <div className="column is-narrow">  
                                        <img src={java} className="stack-logo" alt="logo of Java"/>
                                        <h2 className="subtitle is-size-6-desktop is-size-6-tablet is-size-7-mobile">Java</h2>
                                    </div>
                                    <div className="column is-narrow">    
                                        <img src={jandroid} className="stack-logo" alt="logo of Android"/>
                                        <h2 className="subtitle is-size-6-desktop is-size-6-tablet is-size-7-mobile">Android</h2>
                                    </div>
                                    <div className="column is-narrow">
                                        <img src={swift} className="stack-logo" alt="logo of Swift"/>
                                        <h2 className="subtitle is-size-6-desktop is-size-6-tablet is-size-7-mobile">Swift</h2>
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