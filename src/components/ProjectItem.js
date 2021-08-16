import React from "react";

function ProjectItem(props){

    var rev = "";
    if(props.id % 2 !== 0){
        rev = "reverse"
    }
    else{
        rev = "mobile-reverse";
    }

    return(
        
        <div className="columns is-vcentered" id={rev}>
            <div className="column is-half has-text-left">
                <h1 className="title is-spaced is-size-4-desktop is-size-4-tablet is-size-5-mobile" id="project-title">
                    <a href={props.url} target="_blank" rel="noreferrer">{props.name}</a>
                </h1>
                <h2 className="subtitle is-size-5-desktop is-size-6-tablet is-size-6-mobile">
                    {props.description}
                </h2>
            </div>
            <div className="column">
                <a href={props.url} target="_blank" rel="noreferrer"><img src={props.image} alt="website screenshot" className="project-image"/></a>
            </div>
        </div>        
    );

}

export default ProjectItem;