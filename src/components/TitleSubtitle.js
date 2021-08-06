import React from "react";

function TitleSubtitle(props){

    return(
        <div className="columns is-centered">
            <div className="column is-full">
                <h1 className="title is-spaced is-size-2-desktop is-size-3-tablet is-size-3-mobile">
                    {props.title}
                </h1>
                <h1 className="subtitle is-spaced is-size-5-desktop is-size-5-tablet is-size-s5-mobile">
                    {props.subtitle}
                </h1>
            </div>
        </div>
    );

}
export default TitleSubtitle;
