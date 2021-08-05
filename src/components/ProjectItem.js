import React from "react";


function ProjectItem(props){

    return(
        
        <div className="columns is-vcentered" id={props.reverse}>
            <div className="column is-half has-text-left">
                <h1 className="title is-spaced is-size-3-desktop is-size-4-tablet is-size-5-mobile">
                    {props.name}
                </h1>
                <h2 className="subtitle">
                    {props.description}
                </h2>
            </div>
            <div className="column">
                <a href="https://liya.store/" target="_blank"><img src={liya} className="project-image"/></a>
            </div>
        </div>        
    );

}

export default ProjectItem;