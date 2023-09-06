import React, { useState } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles/main.css';
import Logo from '../assets/logos/OtoBee_white_logo.svg';

const Header = () => {
    const [activeLink, setActiveLink] = useState('/');
    return (
        <header>
            <Link to="/"><img src={Logo} alt="OtoBee by BeeHIVE"></img></Link>

            <nav>
                <ul>
                    <li><Link to="/" className={activeLink === '/' ? 'active' : ''} onClick={() => setActiveLink('/')}>Home</Link></li>
                    <li><Link to="/about-us" className={activeLink === '/about-us' ? 'active' : ''} onClick={() => setActiveLink('/about-us')}>About Us</Link></li>
                    <li><Link to="/services" className={activeLink === '/services' ? 'active' : ''} onClick={() => setActiveLink('/services')}>Services</Link></li>
                    <li><Link to="/branches" className={activeLink === '/branches' ? 'active' : ''} onClick={() => setActiveLink('/branches')}>Branches</Link></li>
                    <li><Link to="/contact" className={activeLink === '/contact' ? 'active' : ''} onClick={() => setActiveLink('/contact')}>Contact</Link></li>
                </ul>
            </nav>
        </header>


    )
}

export default Header;
