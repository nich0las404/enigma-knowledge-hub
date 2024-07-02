import React from "react";
import Star from "./StarLogo";
function Footer(){
    return (
        <div id="footer">
            <div id="star-logo-container">
            <Star/><p>ProductVerse</p>
            </div>
            <p class="footer-p">Created & Maintained By Nicholas HG<span class="product-manager-span">Front-end Engineer</span></p>
        </div>
    )
}

export default Footer;