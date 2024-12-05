import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import FirstSlide from './FirstSlide';

function LastSlide() {
    const {
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
    }
    return (
        <div>
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
            <button onClick={handleStart}>Start again!</button>
        </div>
    );
}

export default LastSlide;
