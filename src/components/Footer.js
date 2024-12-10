import React from 'react'
import "./Footer.css";
function Footer(){
    return (
        <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 EcoTrack. All Rights Reserved.</p>
          <p>
            <a href="mailto:contact@ecotrack.com">contact@ecotrack.com</a> | Phone: +123-456-7890
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    )
}
export default Footer;