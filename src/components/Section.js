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
                                        My Front-End Skills
                                        </h1>
                                    </div>
                                </div>
                                <div class="columns is-centered is-vcentered is-flex">
                                    <div class="column is-narrow">
                                            <figure class="image is-3by3">
                                                <img src={react}/>
                                            </figure>
                                    </div>
                                    <div class="column is-narrow">
                                            <figure class="image is-3by3">
                                            <img src={js}/>
                                            </figure>
                                    </div>
                                    <div class="column is-narrow">
                                            <figure class="image is-3by3">
                                                <img src={bulma}/>
                                            </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="section is-small has-text-centered" id="be-con">
                        <div class="hero-body">
                            <div class="container">
                                <div class="columns is-centered">
                                    <div class="column is-full">
                                        <h1 class="title is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">
                                            My Back-End Skills
                                        </h1>
                                    </div>
                                </div>
                                <div class="columns is-centered is-vcentered is-flex">
                                    <div class="column is-narrow">
                                            <figure class="image is-3by3">
                                                <img src={php}/>
                                            </figure>
                                    </div>
                                    <div class="column is-narrow">
                                            <figure class="image is-3by3">
                                                <img src={spring}/>
                                            </figure>
                                    </div>
                                    <div class="column is-narrow">
                                            <figure class="image is-3by3">
                                                <img src={java}/>
                                            </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="section is-small has-text-centered " id="app-con">
                        <div class="hero-body">
                            <div class="container">
                                <div class="columns is-centered">
                                    <div class="column is-full">
                                        <h1 class="title is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">
                                            My App Dev Skills
                                        </h1>
                                    </div>
                                </div>
                                <div class="columns is-centered is-vcentered is-flex" >

                                    <div class="column is-narrow">
                                            <figure class="image is-3by3">
                                                <img src={jandroid}/>
                                            </figure>
                                    </div>
                                    <div class="column is-narrow">
                                            <figure class="image is-3by3">
                                            <img src={swift}/>
                                            </figure>
                                    </div>
                                    <div class="column is-narrow">
                                            <figure class="image is-3by3">
                                            <img src={swiftui}/>
                                            </figure>
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