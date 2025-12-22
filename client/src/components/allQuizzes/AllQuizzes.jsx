import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { QuizContext } from '../../context/QuizContext';

import FirstSlide from './FirstSlide';

import './AllQuizzes.css';

function AllQuizzes() {
    const { t } = useTranslation();
    const { allQuizzes } = useContext(QuizContext);

    return (
        <div className="quizzes-container">
            {allQuizzes && allQuizzes.length > 0 ? (
                allQuizzes?.map((quiz, id) => {
                    return <FirstSlide quiz={quiz} id={id} />;
                })
            ) : (
                <p>{t('general.loading')}</p>
            )}
        </div>
    );
}

export default AllQuizzes;
