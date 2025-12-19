import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { QuizContext } from '../../context/QuizContext';
import Button from '../ui/Button';

import './Navigation.css';

function Navigation() {
    const { isAnswered, page, setPage, setQuestionIndex, questionIndex } =
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
            <Button
                onClick={handlePrev}
                variant="nav"
                disabled={questionIndex <= 0}
            >
                {t('general.prev')}
            </Button>

            <Button onClick={handleNext} variant="nav" disabled={!isAnswered}>
                {t('general.next')}
            </Button>
        </div>
    );
}

export default Navigation;
