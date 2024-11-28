import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

function FirstSlide({ quiz }) {
    const { polishLanguage, questionIndex, setShowQuiz } =
        useContext(QuizContext);
    return (
        <>
            <h1>{quiz.name}</h1>
            <h3>Number of questions: {quiz.questions.length}</h3>
            {questionIndex < 1 && (
                <button onClick={() => setShowQuiz(true)}>
                    {polishLanguage ? 'Rozpocznij quiz' : 'Start quiz'}
                </button>
            )}
        </>
    );
}

export default FirstSlide;
