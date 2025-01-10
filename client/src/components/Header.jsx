import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    function handleMenu() {
        setIsOpen((prev) => !prev);
    }
    return (
        <header className={isHomePage ? 'header header_homepage' : 'header'}>
            <div className="container container-header">
                <div className="header-navigation">
                    <div className="header-top">
                        <span className="logo" onClick={() => navigate('/')}>
                            learning&fun
                        </span>
                        <div onClick={handleMenu} className="hamburger">
                            {isOpen ? (
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="icon"
                                />
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
                        <Link to="/quizzes" className="header-link">
                            Quizzes
                        </Link>
                        <Link to="/calculators" className="header-link">
                            Calculators
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
