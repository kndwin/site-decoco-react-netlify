import React from 'react';

export function Header () {
    return (
        <div class="header">
            <a id="nav-icon" href=".header">
                <img class="logo" src={require("../images/logo-white.png")}/>
            </a>
        </div>
    );
}

export function Footer () {
    return (
        <div class="footer">
            <p>google+</p>
        </div>
    );
}
