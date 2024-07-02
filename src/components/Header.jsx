import React from "react";
import Comet from "./comet";
import Star from "./StarLogo";

function Header(){
    return (
        <div id="header-page">
            <div id="gif-background"></div>
            <div id="comet-container">
            <Comet id="comet-img"/>
            </div>
            <div id="star-logo-container">
            <Star/><p>ProductVerse</p>
            </div>
            <div id="header-content">
            <p id='header-main-content'>Hi,<br></br>Welcome to the Product Team Knowledge Hub!</p>
            <p id="header-sub-content">
            Here the product team aims to gather and update anything related
              to the programs, services, tools, and product of Enigma Camp. Feel
              free to browse and share with others.
            </p>
            </div>
            <hr/>
        </div>
    )
}

export default Header