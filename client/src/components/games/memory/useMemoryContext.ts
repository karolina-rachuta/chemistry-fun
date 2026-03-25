import { useContext } from 'react';
import { MemoryContext } from './MemoryContext';

const useMemoryContext = () => {
    const context = useContext(MemoryContext);
    if (!context) {
        throw new Error('useMemory must be used within MemoryContextProvider');
    }
    return context;
};

export default useMemoryContext;