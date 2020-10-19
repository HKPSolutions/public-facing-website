import React from 'react';
import './Navbar.css';//put some styling in APP.css
//this created the hyperlinks.
function Navbar(){
    return(
    <div className= "Hello">
        <a href="/app">App</a>  
        <a href="/demo">Demo</a>
        <a href="/contact">Contact</a>
    </div>

    );




}

export default Navbar;