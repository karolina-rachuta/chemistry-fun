import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

function Navigation({ maxQuestions }) {
    const { isAnswered, page, setPage, setQuestionIndex, polishLanguage } =
        useContext(QuizContext);

    function handlePrev() {
        setPage((prev) => prev - 1);
        setQuestionIndex((prev) => prev - 1);
    }
    function handleNext() {
        setPage((prev) => prev + 1);
        setQuestionIndex((prev) => prev + 1);
    }

    return (
        <div className="navigation-container">
            {page > 0 ? (
                <button onClick={handlePrev} className="btn btn-nav">
                    {polishLanguage ? 'Poprzedni' : 'Prev'}
                </button>
            ) : (
                <button onClick={handlePrev} className="btn btn-nav" disabled>
                    {polishLanguage ? 'Poprzedni' : 'Prev'}
                </button>
            )}

            <button
                onClick={handleNext}
                className="btn btn-nav"
                disabled={!isAnswered}
            >
                {polishLanguage ? 'Następny' : 'Next'}
            </button>
        </div>
    );
}

export default Navigation;
