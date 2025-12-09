import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { QuizContext } from '../../context/QuizContext';

import './Navigation.css';

function Navigation() {
    const { isAnswered, page, setPage, setQuestionIndex } =
        useContext(QuizContext);
    const { t } = useTranslation();

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
            <button
                onClick={handlePrev}
                className="btn btn-nav"
                disabled={page <= 0}
            >
                {t('general.prev')}
            </button>

            <button
                onClick={handleNext}
                className="btn btn-nav"
                disabled={!isAnswered}
            >
                {t('general.next')}
            </button>
        </div>
    );
}

export default Navigation;
