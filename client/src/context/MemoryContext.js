import { useState, createContext } from 'react';
import metanolImg from '../assets/metanol.png';
import kwasMrowkowyImg from '../assets/kwas-mrowkowy.png';
import kwasMaslowyImg from '../assets/kwas-maslowy.png';
import glicerynaImg from '../assets/gliceryna.jpg';
import chloroformImg from '../assets/chloroform.png';
import butanolImg from '../assets/butanol.png';
import butanImg from '../assets/butan.png';
import acetylenImg from '../assets/acetylen.jpg';

export const INITIAL_DATABASE = [
    {
        idCompound: 1,
        name: 'Metanol',
        src: metanolImg,
    },
    {
        idCompound: 2,
        name: 'Kwas mrówkowy',
        src: kwasMrowkowyImg,
    },
    {
        idCompound: 3,
        name: 'Kwas masłowy',
        src: kwasMaslowyImg,
    },
    {
        idCompound: 4,
        name: 'Gliceryna',
        src: glicerynaImg,
    },
    {
        idCompound: 5,
        name: 'Chloroform',
        src: chloroformImg,
    },
    {
        idCompound: 6,
        name: 'Butanol',
        src: butanolImg,
    },
    {
        idCompound: 7,
        name: 'Butan',
        src: butanImg,
    },
    {
        idCompound: 8,
        name: 'Acetylen',
        src: acetylenImg,
    },
];
export const MemoryContext = createContext();

export function MemoryContextProvider({ children }) {
    const [cards, setCards] = useState([]);
    return (
        <MemoryContext.Provider
            value={{
                cards,
                setCards,
            }}
        >
            {' '}
            {children}{' '}
        </MemoryContext.Provider>
    );
}
