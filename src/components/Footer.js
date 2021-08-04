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
            <div class="modal ">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Impressum</p>
                        <button class="delete" aria-label="close" onClick={closeIt}></button>
                    </header>
                    <section class="modal-card-body">
                        <Impressum/>
                    </section>
                </div>
            </div>
            
            <div class="content has-text-centered"> 
                <p>
                    <div class="made-by-bulma"><a href="https://bulma.io" target="_blank"><img src="https://bulma.io/images/made-with-bulma--semiblack.png" alt="Made with Bulma" width="163" height="31"/></a></div>
                </p>
                <p>
                    <a onClick={doStuff}>Imprint & Privacy Policy</a>
                </p> 
            </div>
        </footer>
    );
}
export default Footer;