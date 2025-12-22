import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { QuizContext } from '../../context/QuizContext';

import './LastSlide.css';
import Button from '../ui/Button';

function LastSlide({ quiz, maxQuestions }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
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

    function handleBackToQuizzes() {
        handleStart();
        navigate('/quizzes');
    }
    return (
        <div className="last-slide-container">
            <h2>{t('quizzes.quiz_completed')}</h2>
            <h3>
                {t('quizzes.score')} {(pointsCounter * 100) / maxQuestions}%
            </h3>

            <div className="last-slide-btn-box">
                <Button onClick={handleStart}>
                    {t('quizzes.start_again')}
                </Button>
                <Button
                    onClick={handleShowCorrectAnswers}
                    active={showcorrectAnswers}
                >
                    {showcorrectAnswers
                        ? t('quizzes.hide_answers')
                        : t('quizzes.show_answers')}
                </Button>
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
            <Button variant="back" onClick={handleBackToQuizzes}>
                <>
                    <FontAwesomeIcon icon={faArrowLeft} />{' '}
                    {t('quizzes.back_to_all_quizzes')}
                </>
            </Button>
        </div>
    );
}

export default LastSlide;
