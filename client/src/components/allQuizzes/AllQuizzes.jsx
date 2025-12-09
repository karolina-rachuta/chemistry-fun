import React, { useContext } from 'react';

import FirstSlide from './FirstSlide';

import { QuizContext } from '../../context/QuizContext';

import { useTranslation } from 'react-i18next';

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
