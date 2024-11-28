import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

function LastSlide() {
    const {
        polishLanguage,
        showQuiz,
        finishedQuiz,
        pointsCounter,
        maxQuestions,
    } = useContext(QuizContext);
    return (
        <div>
            {showQuiz && finishedQuiz && (
                <div>
                    {polishLanguage ? (
                        <h2>Koniec quizu</h2>
                    ) : (
                        <h2>Quiz Completed</h2>
                    )}
                    {polishLanguage ? (
                        <h3>Wynik: {(pointsCounter * 100) / maxQuestions} %</h3>
                    ) : (
                        <h3>Score: {(pointsCounter * 100) / maxQuestions} %</h3>
                    )}
                </div>
            )}
        </div>
    );
}

export default LastSlide;
