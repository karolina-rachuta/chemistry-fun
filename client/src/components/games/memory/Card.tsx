import { MemoryCard } from './MemoryContext';

interface CardProps {
    card: MemoryCard;
    onCardClick: (id: string) => void;
}

function Card({ card, onCardClick }: CardProps) {
    if (!card) {
        return null;
    }

    return (
        <div onClick={() => onCardClick(card.id)} className="card">
            {card.isFlipped === false ? (
                <h2 className='hdl'>?</h2>
            ) : card.type === 'name' ? (
                <h2 className='hdl-card'>{card.name}</h2>
            ) : (
                <img className="card_img" src={card.src} alt={card.name} />
            )}
        </div>
    );
}

export default Card;