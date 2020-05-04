import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Footer } from './components/Nav.js';
import { Furniture } from './components/Furniture.js';
import { Form  } from './components/Form.js';
import { Map  } from './components/Map.js';
import './css/main.scss';

function Main () {
    return (
        <div class="content">
            <div class="image-gallery">
                <img src={require("./images/nadia.jpg")} alt="furniture"/>
            </div>
            <div class="how">
                <h1 id='how-it-works'>how it works</h1>
                <h2>step 1: design model</h2>
                <p>select your preferred design, size and fabric/leather</p>
            </div>
            <Furniture />
            <div class="how">
                <h2>step 2: confirm order</h2>
                <p>fill out the form below and we'll contact you to confirm your order</p>
            </div>
            <Form />
            <div class="how">
                <h2>step 3: pick up</h2>
                <p>once the design has completed, we'll inform you to pick it up</p>
            </div>
            <img class="dimensions" src={require("./images/pickup-raleigh.svg")} alt="dimension"/>
            <div class="contact">
                <h1 id='contact-us'>visit us</h1>
                <p>Address: 865 Punchbowl Rd, Punchbowl</p>
            </div>
            <Map />
        </div>
    )
}

 function App () {
    return (
        <div class="container">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
ReactDOM.render ( <App />, document.getElementById("root") );
