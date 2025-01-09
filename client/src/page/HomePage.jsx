import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Hero1 from '../assets/hero1part.webp';
import Hero2 from '../assets/hero2part.webp';
import Bgimage from '../assets/pexels-ron-lach-10187127.webp';

function HomePage() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const img1 = useRef(null);
    const img2 = useRef(null);
    const text = useRef(null);

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
        if (text.current) {
            text.current.style.top = `${scrollPosition * 1.5}px`;
        }
    }, [scrollPosition]);

    return (
        <div>
            <Header />
            <section className="parallax">
                <img src={Hero1} alt="" className="hero1" ref={img1} />
                <img src={Hero2} alt="" className="hero2" ref={img2} />
                <img src={Bgimage} alt="" className="bg_img" />
                <h1 className="parallax_text" ref={text}>
                    learning is fun
                </h1>
            </section>
            <section className="homepage__about">
                <div className="about__box">
                    {' '}
                    <Link className="about__hdl" to="/quizzes">
                        Try our quizzes!
                    </Link>
                </div>
                <div className="about__box">
                    <Link className="about__hdl" to="/calculators">
                        Try our metric calculator!
                    </Link>
                </div>
                <div className="about__box">
                    <Link className="about__hdl">coming soon! </Link>
                </div>
                <div className="about__box">
                    <Link className="about__hdl">coming soon! </Link>
                </div>
                <div className="about__box">
                    <Link className="about__hdl">coming soon! </Link>
                </div>
                <div className="about__box">
                    <Link className="about__hdl">coming soon! </Link>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
