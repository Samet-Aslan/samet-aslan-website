import React from "react";
import 'bulma/css/bulma.css';
import Impressum from "./Impressum";
import Logo from "../images/logo-white.png";

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
        <footer className="footer">
            <div className="modal ">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Impressum</p>
                        <button className="delete" aria-label="close" onClick={closeIt}></button>
                    </header>
                    <section className="modal-card-body">
                        <Impressum/>
                    </section>
                </div>
            </div>
            
            <div className="content has-text-centered">
                <p class="footer-logo">
                    <img src={Logo}></img>
                </p>
                <p>
                    <a onClick={doStuff}>Imprint & Privacy Policy</a>
                </p> 
            </div>
        </footer>
    );
}
export default Footer;