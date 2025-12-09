import React from 'react';

function Card({ card, onCardClick }) {
    if (!card) {
        return null;
    }
    return (
        <div onClick={() => onCardClick(card.id)} className="card">
            {card.isFlipped === false ? (
                <h2>?</h2>
            ) : card.type === 'name' ? (
                <h2>{card.name}</h2>
            ) : (
                <img className="card_img" src={card.src} alt={card.name} />
            )}
        </div>
    );
}

export default Card;
