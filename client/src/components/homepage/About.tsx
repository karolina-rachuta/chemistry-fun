import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Brain from '../../assets/brain-solid-full.svg';
import Book from '../../assets/book-open-solid-full.svg';
import Atom from '../../assets/atom-solid-full.svg';
import Calculator from '../../assets/calculator-solid-full.svg';
import Flask from '../../assets/erlenmeyer-flask.png';
import Quiz from '../../assets/quiz.png';

import './About.css';

type Feature = {
    to: string;
    label: string;
    active: boolean;
    icon: string;
    desc: string;
};

function About() {
    const { t } = useTranslation();

    const features: Feature[] = [
        {
            to: '/quizzes',
            label: t('about.quizzes'),
            active: true,
            icon: Quiz,
            desc: t('desc.quizzes'),
        },
        {
            to: '/calculators',
            label: t('about.calculators'),
            active: true,
            icon: Calculator,
            desc: t('desc.calculators'),
        },
        {
            to: '/games',
            label: t('about.games'),
            desc: t('desc.games'),
            active: true,
            icon: Brain,
        },
        {
            to: '/',
            label: t('about.periodic'),
            desc: t('desc.periodic'),
            active: false,
            icon: Atom,
        },
        {
            to: '/',
            label: t('about.lab'),
            desc: t('desc.lab'),
            active: false,
            icon: Flask,
        },
        {
            to: '/',
            label: t('about.study'),
            desc: t('desc.study'),
            active: false,
            icon: Book,
        },
    ];

    return (
        <section className="container about-container">
            <div className='about-coming'>{t('general.features')}</div>
            <h2 className='about-main'>
                Learning is <span className='about-main-blue'>fun</span>
            </h2>
            <p className='about-desc'>{t('about.desc')}</p>
            <div className="homepage__about">

                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="about__box"
                    >
                        <div className='about-top'>

                            <div className="icon-box">
                            <img
                                className="about__icon"
                                src={feature.icon}
                                alt={feature.icon}
                            />
                            </div>
                            <div className={feature.active ? 'no-visible' : 'about-coming'}>{t('general.comming-soon')}</div>
                        </div>

                    <Link className="about__hdl" to={feature.to}>
                        {feature.label}
                    </Link>
                    <p className='about-desc'>{feature.desc}</p>
                </div>
            ))}
        </div>
    </section>
    );
}

export default About;