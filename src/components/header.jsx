import React from "react";
import logo from "../images/meme-logo.png"


export default function Header() {
    return (
        <nav className="nav">
            <div class="nav--intro">
                <img src={logo} className="nav--logo" />
                <h3 className="nav--heading">Meme Generator</h3>
            </div>
            <p className="nav--course-name">React Course - Project 3</p>  
        </nav>

    )
}