import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

function Navigation() {
    const { page, setPage, maxQuestions, setQuestionIndex, polishLanguage } =
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
        <div className="navigation-container">
            {page > 0 && page < maxQuestions + 1 && (
                <button onClick={handlePrev} className="btn-reverse">
                    {polishLanguage ? 'Poprzedni' : 'Prev'}
                </button>
            )}
            {page > 0 && page < maxQuestions + 1 && (
                <button onClick={handleNext} className="btn-reverse">
                    {polishLanguage ? 'Następny' : 'Next'}
                </button>
            )}
        </div>
    );
}

export default Navigation;
