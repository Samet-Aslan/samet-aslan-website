import React from "react";
import 'bulma/css/bulma.css';
import Impressum from "./Impressum";

function Footer(){

    function doStuff(){
        const modal = document.querySelector('.modal');
        modal.style.display = 'block';
    }

    function closeIt(){
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
    }
    
    return(

        

        <footer class="footer">
            <div class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Impressum</p>
                        <button class="delete" aria-label="close" onClick={closeIt}></button>
                    </header>
        <       section class="modal-card-body">
                    <Impressum/>
                </section>
        </div>
    </div>
            <div class="content has-text-centered">
                <p>
                <a onClick={doStuff}>Imprint</a>
                </p>  
                
                
                <p>
                    Developed with <a href="https://reactjs.org/" target="_blank">ReactJS</a> - Designed with <a href="https://bulma.io/" target="_blank">Bulma</a> - Hosted on <a href="https://www.netlify.com/" target="_blank">Netlify</a>
                </p>
            </div>
        </footer>
    );
}
export default Footer;