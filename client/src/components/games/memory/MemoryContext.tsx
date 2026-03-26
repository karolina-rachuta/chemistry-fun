import { useState, createContext, ReactNode, Dispatch, SetStateAction } from 'react';
import metanolImg from '../../../assets/metanol.png';
import kwasMrowkowyImg from '../../../assets/kwas-mrowkowy.png';
import kwasMaslowyImg from '../../../assets/kwas-maslowy.png';
import glicerynaImg from '../../../assets/gliceryna.jpg';
import chloroformImg from '../../../assets/chloroform.png';
import butanolImg from '../../../assets/butanol.png';
import butanImg from '../../../assets/butan.png';
import acetylenImg from '../../../assets/acetylen.jpg';

export interface Compound {
    idCompound: number;
    name: string;
    src: string;
}

export type CardType = 'image' | 'name';

export interface MemoryCard {
    id: string;
    compoundId: number;
    isFlipped: boolean;
    isMatched: boolean;
    type: CardType;
    name: string;
    src?: string;
}

export const INITIAL_DATABASE: Compound[] = [
    { idCompound: 1, name: 'Methanol', src: metanolImg },
    { idCompound: 2, name: 'Formic acid', src: kwasMrowkowyImg },
    { idCompound: 3, name: 'Butyric acid', src: kwasMaslowyImg },
    { idCompound: 4, name: 'Glycerin', src: glicerynaImg },
    { idCompound: 5, name: 'Chloroform', src: chloroformImg },
    { idCompound: 6, name: 'Butanol', src: butanolImg },
    { idCompound: 7, name: 'Butane', src: butanImg },
    { idCompound: 8, name: 'Acetylene', src: acetylenImg },
];

interface MemoryContextType {
    cards: MemoryCard[];
    setCards: Dispatch<SetStateAction<MemoryCard[]>>;
}

export const MemoryContext = createContext<MemoryContextType | null>(null);

interface ProviderProps {
    children: ReactNode;
}

export function MemoryContextProvider({ children }: ProviderProps) {
    const [cards, setCards] = useState<MemoryCard[]>([]);

    return (
        <MemoryContext.Provider value={{ cards, setCards }}>
            {children}
        </MemoryContext.Provider>
    );
}