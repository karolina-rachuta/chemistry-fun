import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

import './About.css';

type Feature = {
    to: string,
    label: string,
    active: boolean
}

function About() {
    const { t } = useTranslation();
    return (
        <section className="homepage__about container">
            {[
                {
                    to: '/quizzes',
                    label: t('about.quizzes'),
                    active: true
                },
                {
                    to: '/calculators',
                    label: t('about.calculators'),
                    active: true
                },
                {
                    to: '/',
                    label: t('about.general'),
                    active: false
                },
                {
                    to: '/',
                    label: t('about.general'),
                    active: false
                },
                {
                    to: '/',
                    label: t('about.general'),
                    active: false
                },
                {
                    to: '/',
                    label: t('about.general'),
                    active: false
                }
            ].map((feature: Feature, idx: number) => (
                <div key={idx} className={`about__box ${feature.active ? '' : 'notactive'}`}>
                    <Trans>
                        <Link className="about__hdl" to={feature.to}>
                            {feature.label}
                        </Link>
                    </Trans>
                </div>
            ))}
        </section >
    );
}

export default About;
