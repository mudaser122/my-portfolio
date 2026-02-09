import React, { useState } from 'react';
import '../styles/global.css';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <div className="container nav-container">
                <div className="logo">Mudasir</div>
                
                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'BLOG', 'CONTACT'].map((item) => (
                        <li key={item} className="nav-item">
                            <a 
                                href={`#${item.toLowerCase()}`} 
                                className="nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
