import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="container container-header">
                <span className="logo">Chemistry&Fun</span>
                <nav className="header-navbar">
                    <Link to="/" className="header-link">
                        Home
                    </Link>
                    <Link to="/quizes" className="header-link">
                        Chemistry Quizes
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
