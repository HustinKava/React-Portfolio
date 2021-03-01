import React from 'react';
import './Footer.css';

function Footer () {
    return (
        // Footer tags house the footer contents, connect with me social icons and copyright information
        <footer className="py-4" id="footerSection">
            <div className="container-fluid">
                <p>Connect with me</p>
                <div className="socialMedia">
                    <a href="https://github.com/HustinKava" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                    </a>
                    <a href="http://www.linkedin.com/in/hustin-kava" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin-square"></i>
                    </a>
                </div>
    
                <p id="copyRight">&#169; 2020 Hustin Kava</p>
    
            </div>
        </footer> 
    )
}; 

export default Footer;