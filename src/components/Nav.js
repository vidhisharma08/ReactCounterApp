import React from "react";
import "./NavBar.css";
const ab=()=>{
    return(
        <>
        <nav className="navbar">
      <div className="logo">
        <h1>EcoTrack</h1>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
        </>
    )
}
export default ab;