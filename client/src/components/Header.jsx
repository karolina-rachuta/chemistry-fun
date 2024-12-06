import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    function handleMenu() {
        setIsOpen((prev) => !prev);
    }
    return (
        <header className="header">
            <div className="container container-header">
                <span className="logo">Chemistry&Fun</span>
                <nav className={`header-navbar ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className="header-link">
                        Home
                    </Link>
                    <Link to="/quizes" className="header-link">
                        Chemistry Quizes
                    </Link>
                </nav>
            </div>
            <div onClick={handleMenu} className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}

export default Header;
