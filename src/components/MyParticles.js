import { render } from "@testing-library/react";
import React from "react";
import Particles from "react-tsparticles";

class MyParticles extends React.Component{

    constructor(props) {
        super(props);
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
      }
    
      particlesInit(main){
        console.log(main);
      }
    
      particlesLoaded(container){
        console.log(container);
      }

      render(){
        return(
            <div className="particles_container">

            <Particles
            id="tsparticles"
            init={this.particlesInit}
            loaded={this.particlesLoaded}
            options={{
                "particles": {
                  "number": {
                    "value": 7,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#65c9ff"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000"
                    },
                    "polygon": {
                      "nb_sides": 6
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 76.13948754117546,
                    "random": false,
                    "anim": {
                      "enable": true,
                      "speed": 10,
                      "size_min": 40,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 200,
                    "color": "#ffffff",
                    "opacity": 1,
                    "width": 2
                  },
                  "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "top",
                    "random": true,
                    "straight": true,
                    "out_mode": "out",
                    "bounce": true,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "grab"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }}
          />
    
            </div>
        );
        
      }  

}
export default MyParticles;