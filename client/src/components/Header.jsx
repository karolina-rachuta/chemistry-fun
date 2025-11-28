import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { QuizContext } from '../context/QuizContext';

const lngs = {
    en: { nativeName: 'EN' },
    pl: { nativeName: 'PL' },
};

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const isHomePage = location.pathname === '/';
    const { setPolishLanguage } = useContext(QuizContext);

    function handleChangeLanguage(lng) {
        i18next.changeLanguage(lng);
        if (lng === 'en') {
            setPolishLanguage(false);
        } else if (lng === 'pl') {
            setPolishLanguage(true);
        }
    }

    function handleMenu() {
        setIsOpen((prev) => !prev);
    }
    return (
        <header className={isHomePage ? 'header header_homepage' : 'header'}>
            <div className="container container-header">
                <div className="header-navigation">
                    <div className="header-top">
                        <span className="logo" onClick={() => navigate('/')}>
                            chemistry&fun
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
                        <Link
                            to="/"
                            className={
                                'header-link' +
                                (location.pathname === '/' ? ' active' : '')
                            }
                        >
                            {t('header.home')}
                        </Link>
                        <Link
                            to="/quizzes"
                            className={
                                'header-link' +
                                (location.pathname === '/quizzes'
                                    ? ' active'
                                    : '')
                            }
                        >
                            {t('header.quizzes')}
                        </Link>
                        <Link
                            to="/calculators"
                            className={
                                'header-link' +
                                (location.pathname === '/calculators'
                                    ? ' active'
                                    : '')
                            }
                        >
                            {t('header.calculators')}
                        </Link>
                        <div className="lang-container">
                            {Object.keys(lngs).map((lng) => (
                                <button
                                    className={
                                        'lang-link' +
                                        (i18next.resolvedLanguage === lng
                                            ? ' active'
                                            : '')
                                    }
                                    type="submit"
                                    key={lng}
                                    onClick={() => handleChangeLanguage(lng)}
                                >
                                    {lngs[lng].nativeName}
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
