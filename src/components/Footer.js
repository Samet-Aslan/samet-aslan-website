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
                <p>
                    <div className="made-by-bulma"><a href="https://bulma.io" target="_blank"><img src="https://bulma.io/images/made-with-bulma--semiblack.png" alt="Made with Bulma" width="163" height="31"/></a></div>
                </p>
                <p>
                    <a onClick={doStuff}>Imprint & Privacy Policy</a>
                </p> 
            </div>
        </footer>
    );
}
export default Footer;