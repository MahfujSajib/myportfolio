import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <h1 className='footer-name'>Mahfuj Khan Sajib</h1>
            <div className="footer-nav">
                <a className='navbars' href="#">Home</a>
                <a className='navbars' href="#about">About</a>
                <a className='navbars' href="#experience">Experience</a>
                <a className='navbars' href="#services">Services</a>
                <a className='navbars' href="#contact">Contact</a>    
            </div>
            <div className='copy-rights'>
                <h5>All rights reserved &copy; Mahfuj Khan sajib</h5>
            </div>
        </div>
    );
};

export default Footer;