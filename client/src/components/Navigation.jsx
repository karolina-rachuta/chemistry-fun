import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

function Navigation() {
    const { page, setPage, maxQuestions, setQuestionIndex } =
        useContext(QuizContext);

    function handlePrev() {
        if (page > 1 && page <= maxQuestions) {
            setPage((prev) => prev - 1);
            setQuestionIndex((prev) => prev - 1);
        } else if (page === 1) {
            setPage((prev) => prev - 1);
        } else if (page === maxQuestions + 1) {
            setPage((prev) => prev - 1);
        }
    }
    function handleNext() {
        if (page < maxQuestions) {
            setPage((prev) => prev + 1);
            setQuestionIndex((prev) => prev + 1);
        } else if (page === maxQuestions) {
            setPage((prev) => prev + 1);
        }
    }

    return (
        <>
            {page > 0 && <button onClick={handlePrev}>Prev</button>}
            {page > 0 && page < maxQuestions + 1 && (
                <button onClick={handleNext}>Next</button>
            )}
        </>
    );
}

export default Navigation;
