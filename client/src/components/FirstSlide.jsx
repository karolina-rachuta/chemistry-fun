import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

function FirstSlide({ quiz }) {
    const { setPage, polishLanguage } = useContext(QuizContext);
    return (
        <>
            <h1>{quiz?.name}</h1>
            <h3>Number of questions: {quiz?.questions.length}</h3>
            <button onClick={() => setPage(1)}>
                {polishLanguage ? 'Rozpocznij quiz' : 'Start quiz'}
            </button>
        </>
    );
}

export default FirstSlide;
