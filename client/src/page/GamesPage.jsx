import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Board from '../components/games/memory/Board';

function GamesPage() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="games_container">
                    <h2>Memory game</h2>
                    <Board />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default GamesPage;
