import { useTranslation } from 'react-i18next';

import './Hero.css';

function Hero() {
    const { t } = useTranslation();
    return (
        <section
            className="hero"
        >
            <h1 className="hdl__main">
            {t('hero.welcome')}
            </h1>
            <span className='hdl__main-blue'>{t('hero.hdl')}</span>
        </section>
    );
}

export default Hero;
