import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { QuizContext } from '../../context/QuizContext';

import { useTranslation } from 'react-i18next';

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
                <button
                    onClick={() => {
                        handleStart(id);
                    }}
                    className="btn"
                >
                    {t('quizzes.start')}
                </button>
            </div>
        </div>
    );
}

export default FirstSlide;
