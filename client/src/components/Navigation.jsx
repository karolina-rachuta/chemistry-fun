import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

function Navigation() {
    const {
        selectedAnswer,
        setSelectedAnswer,
        questionIndex,
        maxQuestions,
        setQuestionIndex,
        finishedQuiz,
        setFinishedQuiz,
        showQuiz,
    } = useContext(QuizContext);

    function handlePrev() {
        if (questionIndex > 0) {
            setQuestionIndex((prev) => prev - 1);
        }
        console.log(questionIndex);
    }
    function handleNext() {
        if (questionIndex < maxQuestions - 1) {
            setQuestionIndex((prev) => prev + 1);
        } else {
            setFinishedQuiz(true);
        }
        console.log(questionIndex);
    }

    return (
        <>
            {showQuiz && <button onClick={handlePrev}>Prev</button>}
            {showQuiz && !finishedQuiz && (
                <button onClick={handleNext}>Next</button>
            )}
        </>
    );
}

export default Navigation;
