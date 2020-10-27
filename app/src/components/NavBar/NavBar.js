import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
import { useLocation } from "react-router-dom";

import Branding from './assets/brand.png'

function Navbar() {
    const [isMobileOpen, setOpen] = React.useState(false);
    let location = useLocation();

    function selectedClassName(name){
        if (name === location.pathname.substr(1))
            return "selected-nav-button";
    }
    
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
            <button className={"toggle-menu " + (isMobileOpen ? " active" : "")} onClick={onClickHandler}>
                <i></i>
                <i></i>
                <i></i>
            </button>
            <ul className={(isMobileOpen ? "open" : "close")}>
                <li className={selectedClassName("app")}><Link to="/app">app</Link></li>
                <li className={selectedClassName("demo")}><Link to="/demo">demo</Link></li>
                <li className={selectedClassName("contact")}><Link to="/contact">contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;