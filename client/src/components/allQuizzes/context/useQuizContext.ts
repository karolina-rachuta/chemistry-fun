import { useContext } from 'react';
import { QuizContext } from './QuizContext';

export function useQuizContext() {
    const context = useContext(QuizContext);

    if (!context) {
        throw new Error('Context is undefined. Define the context!');
    }
    return context;
}
