import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import Board from '../components/games/memory/Board';
import ComponentContainer from '../components/ui/ComponentContainer';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

function GamesPage() {
    const { t } = useTranslation();
    return (
        <>
            <Header />
                <div className="container">
                    <ComponentContainer className={clsx("container", "text-center")} variant="pageContainer">
                        <h2 className={clsx("hdl", "margin-top")}>{t('memory.hdl')}</h2>
                        <p className='about-desc'>{t('memory.desc')}</p>
                        <Board />
                    </ComponentContainer>
                </div>
            <Footer />
        </>
    );
}

export default GamesPage;
