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


class Section extends React.Component{
    render(){
        return(
                <div>
                    <section class="section is-small has-text-centered" id="fe-con">
                        <div class="hero-body">
                            <div class="container">
                                <div class="columns is-centered">
                                    <div class="column is-full">
                                        <h1 class="title is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">
                                            Technologies I'm experienced at
                                        </h1>
                                    </div>
                                </div>
                                
                                <div class="columns is-vcentered is-mobile">
                                   
                                    <div class="column">
                                        <img src={js} class="stack-logo"/>
                                    </div>
                                    <div class="column">                                         
                                        <img src={bulma} class="stack-logo"/>                                        
                                    </div>
                                    <div class="column">                             
                                        <img src={php} class="stack-logo"/>                                   
                                    </div>
                                    <div class="column">
                                        <img src={react} class="stack-logo"/>    
                                    </div>
                                    <div class="column">
                                        <img src={spring} class="stack-logo"/>      
                                    </div>
                                </div>
                                <div class="columns is-vcentered is-mobile">
                                    <div class="column">  
                                        <img src={java} class="stack-logo"/>
                                    </div>
                                    <div class="column">    
                                        <img src={jandroid} class="stack-logo"/>
                                    </div>
                                    <div class="column">
                                        <img src={swift} class="stack-logo"/>
                                    </div>
                                    <div class="column">
                                        <img src={swiftui} class="stack-logo"/>
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