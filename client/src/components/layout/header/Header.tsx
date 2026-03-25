import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { useQuizContext } from '../../allQuizzes/context/useQuizContext';

import './Header.css';

const lngs = {
    en: { nativeName: 'EN' },
    pl: { nativeName: 'PL' },
} as const;

type Lng = keyof typeof lngs;

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const isHomePage = location.pathname === '/';

    const { setPolishLanguage } = useQuizContext();

    function handleChangeLanguage(lng: Lng) {
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
                        {
                            [
                                {
                                    to: '/',
                                    label: t('header.home')
                                },
                                {
                                    to: '/quizzes',
                                    label: t('header.quizzes')
                                }, {
                                    to: '/calculators',
                                    label: t('header.calculators')
                                }
                            ].map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.to}
                                    className={location.pathname === item.to ? 'header-link active' : 'header-link'}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        <div className="lang-container">
                            {(Object.keys(lngs) as Lng[]).map((lng) => (
                                <button
                                    className={
                                        'lang-link' +
                                        (i18next.resolvedLanguage === lng
                                            ? ' active'
                                            : '')
                                    }
                                    type="button"
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
