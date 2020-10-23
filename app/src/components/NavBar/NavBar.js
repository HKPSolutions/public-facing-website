import React from 'react';
import './style.scss';

import Branding from './assets/brand.png'

function Navbar() {
    const [isMobileOpen, setOpen] = React.useState(false);

    function onClickHandler() {
        setOpen((old) => !old);
    }

    return (
        <div className="navbar">
            <div className="navbar-branding">
                <a href="/">
                    <img alt="branding" src={Branding} />
                </a>
            </div>
            <a class={"toggle-menu " + (isMobileOpen ? " active" : "")} href="#" onClick={onClickHandler}>
                <i></i>
                <i></i>
                <i></i>
            </a>
            <ul class={(isMobileOpen ? "open" : "close")}>
                <li><a href="/app">app</a></li>
                <li><a href="/demo">demo</a></li>
                <li><a href="/contact">contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;