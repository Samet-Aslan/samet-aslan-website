import React from "react";
import 'bulma/css/bulma.css';
import FA from 'react-fontawesome';
import java from '../images/java.png';
import react from '../images/react.png';
import php from '../images/php.png';
import angular from '../images/angular.png';
import html5 from '../images/html5.png';
import js from '../images/js.png';
import bulma from '../images/bulma.png';


class Section extends React.Component{
    render(){
        return(
        <div>
            <div class="columns is-centered">
                <div class="column is-full has-text-centered">
                    <p class="title has-text-centered">Front-End-Skills</p>
                </div>
            </div>
                <div class="columns is-vcentered is-centered">
                    <div class="column">
                        <figure class="image is-3by3">
                            <img class="fe-logo" src={bulma} alt="bulma logo"/>
                        </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-3by3">
                            <img class="fe-logo" src={react} alt="react logo"/>
                        </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-3by3">
                            <img class="fe-logo" src={js} alt="javascript logo"/>
                        </figure>
                    </div>
                </div>
        </div>
                
            
        );
    }
}
export default Section;