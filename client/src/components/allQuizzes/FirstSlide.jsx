import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { QuizContext } from '../../context/QuizContext';
import Button from '../ui/Button';

import './FirstSlide.css';

function FirstSlide({ quiz, id }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { polishLanguage } = useContext(QuizContext);

    function handleStart(id) {
        navigate(`/quizzes/${id}`);
    }
    return (
        <div key={id} className="quiz-container">
            <h1>{polishLanguage ? quiz?.name_pl : quiz?.name_en}</h1>
            <div className="quiz-container-bottom">
                <h3>
                    {t('quizzes.questions')}
                    {quiz?.questions.length}
                </h3>
                <Button
                    onClick={() => {
                        handleStart(id);
                    }}
                >
                    {t('quizzes.start')}
                </Button>
            </div>
        </div>
    );
}

export default FirstSlide;
