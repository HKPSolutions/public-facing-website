import React from 'react';
import {Link} from 'react-router-dom';
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
            <button className={"toggle-menu " + (isMobileOpen ? " active" : "")} onClick={onClickHandler}>
                <i></i>
                <i></i>
                <i></i>
            </button>
            <ul className={(isMobileOpen ? "open" : "close")}>
                <li><Link to="/app">app</Link></li>
                <li><Link to="/demo">demo</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;