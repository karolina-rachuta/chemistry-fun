import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
    const { t } = useTranslation();
    return (
        <section
            className="hero"
        >
        <div className='hero-feature'> {t('hero.feature')}</div>
            <h1 className="hdl__main">
            {t('hero.welcome')}
            </h1>
            <span className='hdl__main-blue'>{t('hero.hdl')}</span>
            <p className='hero-desc'>{t('hero.desc')}</p>
            <div className='hero-btn-box'>
                <Link to='/quizzes'>
                    <Button
                        variant="primary"
                        className='cta-btn'
                    >
                        {t('hero.cta1')}
                    </Button>
                </Link>
                <Link to='/calculators'>
                    <Button
                        variant="nav"
                        className='cta-btn'
                    >
                        {t('hero.cta2')}
                    </Button>
                </Link>
            </div>
        </section>
    );
}

export default Hero;
