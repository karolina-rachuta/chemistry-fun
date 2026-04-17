import { useState } from 'react';
import { INITIAL_DATABASE, Compound, MemoryCard } from './MemoryContext';
import useMemoryContext from './useMemoryContext';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import Button from '../../ui/Button';
import { useTranslation } from 'react-i18next';
// import clsx from 'clsx';
import './Memory.css';

function Board() {
    const { cards, setCards } = useMemoryContext();
    const [selectedCards, setSelectedCards] = useState<string[]>([]);
    const [isBoardLocked, setIsBoardLocked] = useState<boolean>(false);

    function shuffleCards(cards: MemoryCard[]): MemoryCard[] {
        const shuffledCards = cards
            .map((card) => ({ value: card, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map((card) => card.value);

        return shuffledCards;
    }

    function handleCreatingCards(): void {
        const createdCards: MemoryCard[] = INITIAL_DATABASE.flatMap(
            (compound: Compound) => {
                const imageCard: MemoryCard = {
                    id: uuidv4(),
                    compoundId: compound.idCompound,
                    isFlipped: false,
                    isMatched: false,
                    src: compound.src,
                    type: 'image',
                    name: compound.name,
                };

                const nameCard: MemoryCard = {
                    id: uuidv4(),
                    compoundId: compound.idCompound,
                    isFlipped: false,
                    isMatched: false,
                    type: 'name',
                    name: compound.name,
                };

                return [nameCard, imageCard];
            }
        );

        const shuffledCards = shuffleCards(createdCards);
        setCards(shuffledCards);
        setSelectedCards([]);
        setIsBoardLocked(false);
    }

    function handleCardClick(id: string): void {
        if (isBoardLocked) return;

        const clickedCard = cards.find((card: MemoryCard) => card.id === id);
        if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) return;

        const cardsAfterFlip = cards.map((card: MemoryCard) =>
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
                (card: MemoryCard) => card.id === idFirstSelectedCard
            );
            const findSecondCard = cardsAfterFlip.find(
                (card: MemoryCard) => card.id === idSecondSelectedCard
            );

            if (!findFirstCard || !findSecondCard) {
                setIsBoardLocked(false);
                setSelectedCards([]);
                return;
            }

            if (findFirstCard.compoundId === findSecondCard.compoundId) {
                setCards((prev: MemoryCard[]) =>
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
                    setCards((prev: MemoryCard[]) =>
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
            {/* <h2 className={clsx("hdl", "margin-top")}>{t('memory.hdl')}</h2>
            <p className='about-desc'>{t('memory.desc')}</p> */}

             {cards.length === 0 && (
                <Button
                    variant="nav"
                    onClick={handleCreatingCards}
                >
                    Start a game
                </Button>
        )}
            <div className="board">
                {cards.map((card: MemoryCard) => (
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