import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

function LastSlide() {
    const {
        setAnswers,
        setPage,
        setQuestionIndex,
        polishLanguage,
        pointsCounter,
        setPointsCounter,
        maxQuestions,
    } = useContext(QuizContext);

    function handleStart() {
        setQuestionIndex(0);
        setPointsCounter(0);
        setPage(0);
        setAnswers({});
    }
    return (
        <div>
            <div className="last-slide-container">
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
                <button onClick={handleStart} className="btn">
                    Start again!
                </button>
            </div>
        </div>
    );
}

export default LastSlide;
