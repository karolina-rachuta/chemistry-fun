import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { QuizContext } from '../../context/QuizContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'react-i18next';

function LastSlide({ quiz, maxQuestions }) {
    const { t } = useTranslation();
    const [showcorrectAnswers, setShowCorrectAnswers] = useState(false);
    const {
        setAnswers,
        setPage,
        setQuestionIndex,
        polishLanguage,
        pointsCounter,
        setPointsCounter,
    } = useContext(QuizContext);

    function handleStart() {
        setQuestionIndex(0);
        setPointsCounter(0);
        setPage(0);
        setAnswers({});
    }

    function handleShowCorrectAnswers() {
        setShowCorrectAnswers((prev) => !prev);
    }

    return (
        <div className="last-slide-container">
            <h2>{t('quizzes.quiz_completed')}</h2>
            <h3>
                {t('quizzes.score')} {(pointsCounter * 100) / maxQuestions}%
            </h3>

            <div className="last-slide-btn-box">
                <button onClick={handleStart} className="btn">
                    {t('quizzes.start_again')}
                </button>
                <button
                    onClick={handleShowCorrectAnswers}
                    className={showcorrectAnswers ? 'btn active' : 'btn'}
                >
                    {showcorrectAnswers
                        ? t('quizzes.hide_answers')
                        : t('quizzes.show_answers')}
                </button>
            </div>
            {showcorrectAnswers &&
                quiz.questions.map((questionObj, id) => (
                    <div key={id} className="correct-answers-container">
                        <p>
                            {questionObj.question.id}.
                            {polishLanguage
                                ? questionObj.question.pl
                                : questionObj.question.en}
                        </p>
                        <p>
                            -
                            {polishLanguage
                                ? questionObj.answers.pl[
                                      questionObj.correctAnswer
                                  ]
                                : questionObj.answers.en[
                                      questionObj.correctAnswer
                                  ]}
                        </p>
                    </div>
                ))}
            <Link className="btn btn-back" onClick={handleStart} to="/quizzes">
                <>
                    <FontAwesomeIcon icon={faArrowLeft} />{' '}
                    {t('quizzes.back_to_all_quizzes')}
                </>
            </Link>
        </div>
    );
}

export default LastSlide;
