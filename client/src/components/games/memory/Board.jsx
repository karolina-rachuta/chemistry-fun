import React, { useContext, useState } from 'react';
import {
    MemoryContext,
    INITIAL_DATABASE,
} from '../../../context/MemoryContext';
//import { INITIAL_DATABASE } from '../../../data/memory';
import { v4 as uuidv4 } from 'uuid';
import Card from '../../games/memory/Card';

function Board() {
    const { cards, setCards } = useContext(MemoryContext);
    const [selectedCards, setSelectedCards] = useState([]);
    const [isBoardLocked, setIsBoardLocked] = useState(false);

    function shuffleCards(cards) {
        const shuffledCards = cards
            .map((card) => ({ value: card, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map((card) => card.value);
        return shuffledCards;
    }

    function handleCreatingCards() {
        //flatMap robi z tablicy [ [karta1, karta2], [karta3, karta4], ... ] prostą [karta1, karta2, karta3, karta4, ...].
        const createdCards = INITIAL_DATABASE.flatMap((compound) => {
            const imageCard = {};
            imageCard.id = uuidv4();
            imageCard.compoundId = compound.idCompound;
            imageCard.isFlipped = false;
            imageCard.isMatched = false;
            imageCard.src = compound.src;
            imageCard.type = 'image';
            imageCard.name = compound.name;

            const nameCard = {};
            nameCard.id = uuidv4();
            nameCard.compoundId = compound.idCompound;
            nameCard.isFlipped = false;
            nameCard.isMatched = false;
            nameCard.type = 'name';
            nameCard.name = compound.name;

            return [nameCard, imageCard];
        });
        const shuffledCards = shuffleCards(createdCards);
        setCards(shuffledCards);
        setSelectedCards([]);
        setIsBoardLocked(false);
    }

    function handleCardClick(id) {
        if (isBoardLocked) return;

        const clickedCard = cards.find((card) => card.id === id);
        if (clickedCard.isFlipped || clickedCard.isMatched) return;

        const cardsAfterFlip = cards.map((card) =>
            card.id === id ? { ...card, isFlipped: true } : card
        );
        setCards(cardsAfterFlip);

        if (selectedCards.length === 0) {
            setSelectedCards([id]);
            return;
        }

        if (selectedCards.length === 1) {
            const idFirstSelectedCard = selectedCards[0];
            const idSecondSelectedCard = id;

            setSelectedCards([idFirstSelectedCard, idSecondSelectedCard]);
            setIsBoardLocked(true);

            const findFirstCard = cardsAfterFlip.find(
                (card) => card.id === idFirstSelectedCard
            );
            const findSecondCard = cardsAfterFlip.find(
                (card) => card.id === idSecondSelectedCard
            );

            if (!findFirstCard || !findSecondCard) {
                setIsBoardLocked(false);
                setSelectedCards([]);
                return;
            }

            if (findFirstCard.compoundId === findSecondCard.compoundId) {
                setCards((prev) =>
                    prev.map((card) =>
                        card.id === idFirstSelectedCard ||
                        card.id === idSecondSelectedCard
                            ? { ...card, isMatched: true }
                            : card
                    )
                );
                setSelectedCards([]);
                setIsBoardLocked(false);
            } else {
                setTimeout(() => {
                    setCards((prev) =>
                        prev.map((card) =>
                            card.id === idFirstSelectedCard ||
                            card.id === idSecondSelectedCard
                                ? { ...card, isFlipped: false }
                                : card
                        )
                    );
                    setSelectedCards([]);
                    setIsBoardLocked(false);
                }, 800);
            }
        }
    }

    return (
        <div className="memory_container">
            <button onClick={handleCreatingCards} className="btn btn-green">
                Start a game
            </button>
            <div className="board">
                {cards.map((card) => (
                    <Card
                        card={card}
                        key={card.id}
                        onCardClick={handleCardClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default Board;
