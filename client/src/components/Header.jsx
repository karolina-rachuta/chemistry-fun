import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    function handleMenu() {
        setIsOpen((prev) => !prev);
    }
    return (
        <header className="header">
            <div className="container container-header">
                <div className="header-navigation">
                    <div className="header-top">
                        <span className="logo">Chemistry&Fun</span>
                        <div onClick={handleMenu} className="hamburger">
                            {isOpen ? (
                                <i className="fas fa-times"></i>
                            ) : (
                                <>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </>
                            )}
                        </div>
                    </div>
                    <nav className={`header-menu ${isOpen ? 'open' : ''}`}>
                        <Link to="/" className="header-link">
                            Home
                        </Link>
                        <Link to="/quizes" className="header-link">
                            Chemistry Quizes
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
