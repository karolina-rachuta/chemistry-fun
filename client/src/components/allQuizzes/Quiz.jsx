import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { QuizContext } from '../../context/QuizContext';

import Question from './quiz/Question';
import Answers from './quiz/Answers';
import Navigation from './Navigation';

import './Quiz.css';

function Quiz({ quiz, maxQuestions }) {
    const { t } = useTranslation();

    const {
        questionIndex,
        setQuestionIndex,
        setAnswers,
        setPage,
        setPointsCounter,
    } = useContext(QuizContext);

    function handleStart() {
        setQuestionIndex(0);
        setPointsCounter(0);
        setPage(0);
        setAnswers({});
    }
    return (
        <div className="quiz-slide">
            <div className="quiz-slide-top">
                <Link to="/quizzes" className="link-back" onClick={handleStart}>
                    <>
                        <FontAwesomeIcon icon={faArrowLeft} />{' '}
                        {t('general.back')}
                    </>
                </Link>
                <h4>{`${questionIndex + 1} / ${maxQuestions}`}</h4>
            </div>
            <Question quiz={quiz} />
            <Answers quiz={quiz} />
            <Navigation />
        </div>
    );
}

export default Quiz;
