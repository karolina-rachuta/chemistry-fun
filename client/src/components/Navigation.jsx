import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

function Navigation() {
    const {
        questionIndex,
        maxQuestions,
        setQuestionIndex,
        finishedQuiz,
        setFinishedQuiz,
        showQuiz,
    } = useContext(QuizContext);

    function handleNext() {
        if (questionIndex < maxQuestions - 1) {
            setQuestionIndex((prev) => (prev += 1));
        } else {
            setFinishedQuiz(true);
        }
    }

    return (
        <>
            {showQuiz && !finishedQuiz && (
                <button onClick={handleNext}>Next</button>
            )}
        </>
    );
}

export default Navigation;
