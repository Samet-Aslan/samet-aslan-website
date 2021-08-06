import React from "react";
import liya from '../images/liya.store.PNG';
import ernstberger from '../images/ernstberger.PNG';

function ProjectItem(props){

    var rev = "";
    if(props.id % 2 != 0){
        rev = "reverse"
    }
    else{
        rev = "mobile-reverse";
    }

    return(
        
        <div className="columns is-vcentered" id={rev}>
            <div className="column is-half has-text-left">
                <h1 className="title is-spaced is-size-4-desktop is-size-4-tablet is-size-5-mobile" id="project-title">
                    {props.name}
                </h1>
                <h2 className="subtitle is-size-5-desktop is-size-6-tablet is-size-6-mobile">
                    {props.description}
                </h2>
            </div>
            <div className="column">
                <a href={props.url} target="_blank"><img src={props.image} className="project-image"/></a>
            </div>
        </div>        
    );

}

export default ProjectItem;