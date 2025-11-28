import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Hero1 from '../assets/hero1part.webp';
import Hero2 from '../assets/hero2part.webp';
import Bgimage from '../assets/pexels-ron-lach-10187127.webp';
import Footer from '../components/Footer';

import { useTranslation, Trans } from 'react-i18next';

function HomePage() {
    const { t } = useTranslation();
    const [scrollPosition, setScrollPosition] = useState(0);
    const img1 = useRef(null);
    const img2 = useRef(null);
    const text = useRef(null);
    const cta = useRef(null);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (img1.current) {
            img1.current.style.left = `${scrollPosition * -1.5}px`;
        }
        if (img2.current) {
            img2.current.style.right = `${scrollPosition * -1.5}px`;
        }
        if (text.current && scrollPosition) {
            text.current.style.top = `${scrollPosition * 1.5}px`;
            text.current.style.display = 'block';
        } else {
            text.current.style.display = 'none';
        }
        if (cta.current && scrollPosition) {
            cta.current.style.display = 'none';
        } else {
            cta.current.style.display = 'block';
        }
    }, [scrollPosition]);

    return (
        <div>
            <Header />
            <section className="parallax">
                <img src={Hero1} alt="" className="hero1" ref={img1} />
                <img src={Hero2} alt="" className="hero2" ref={img2} />
                <button className="parallax_btn" ref={cta}>
                    <Trans>
                        {t('parallax.welcome')} <br />
                        <span className="parralax-arrow">&#8964;</span>{' '}
                    </Trans>
                </button>
                <img src={Bgimage} alt="" className="bg_img" />
                <h1 className="parallax_text" ref={text}>
                    {t('parallax.hdl')}
                </h1>
            </section>
            <section className="homepage__about container">
                <div className="about__box">
                    {' '}
                    <Link className="about__hdl" to="/quizzes">
                        {t('about.quizzes')}
                    </Link>
                </div>
                <div className="about__box">
                    <Link className="about__hdl" to="/calculators">
                        {t('about.calculators')}
                    </Link>
                </div>
                <div className="about__box notactive">
                    <Trans>
                        <Link className="about__hdl">{t('about.general')}</Link>
                    </Trans>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default HomePage;
