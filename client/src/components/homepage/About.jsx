import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

import './About.css';

function About() {
    const { t } = useTranslation();
    return (
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
            <div className="about__box notactive">
                <Trans>
                    <Link className="about__hdl">{t('about.general')}</Link>
                </Trans>
            </div>
            <div className="about__box notactive">
                <Trans>
                    <Link className="about__hdl">{t('about.general')}</Link>
                </Trans>
            </div>
            <div className="about__box notactive">
                <Trans>
                    <Link className="about__hdl">{t('about.general')}</Link>
                </Trans>
            </div>
        </section>
    );
}

export default About;
