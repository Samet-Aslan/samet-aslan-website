import React from "react";
import 'bulma/css/bulma.css';
import TitleSubtitle from "./TitleSubtitle";
import ProjectItem from "./ProjectItem";
import liya from '../images/liya.store.PNG';
import ernstberger from '../images/ernstberger.PNG';

let projects = [
    {    
        name:"liya.store", 
        description:"Liya.Store is a shop for women clothing. It is built with WooCommerce and Elementor. A custom dashboard has been developed with PHP and JavaScript.",
        reverse:"y",
        image:"/static/media/liya.store.90209ee8.PNG",
        url:"https://liya.store/"
    }
];

  class ProjectSection extends React.Component{
    render(){
        let result = [];
        var i = 1;
        projects.forEach(function(project) {
          result.push(
            <ProjectItem 
                name={project.name} 
                description={project.description} 
                reverse={project.reverse}
                image={project.image.toString()}
                url={project.url}
                id={i}
                key={i}/>)
          i++;
        }, this);

        return(
            <div>
                <section className="section has-text-centered" id="projects-con">
                   <div className="hero-body">
                        <div className="container">
                            <TitleSubtitle title="Projects" subtitle="These are the projects I was mainly involved in."/>
                            {result}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default ProjectSection;