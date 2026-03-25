import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import Board from '../components/games/memory/Board';
import ComponentContainer from '../components/ui/ComponentContainer';
import clsx from 'clsx';

function GamesPage() {
    return (
        <>
            <Header />
                <div className="container">
                    <ComponentContainer className={clsx("container", "text-center")} variant="pageContainer">
                        <h2 className='hdl'>Memory game</h2>
                        <Board />
                    </ComponentContainer>
                </div>
            <Footer />
        </>
    );
}

export default GamesPage;
