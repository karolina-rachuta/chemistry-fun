import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { QuizContext } from '../../context/QuizContext';
import { useNavigate } from 'react-router-dom';
import Question from './quiz/Question';
import Answers from './quiz/Answers';
import Navigation from './Navigation';

import './Quiz.css';
import Button from '../ui/Button';

function Quiz({ quiz, maxQuestions }) {
    const { t } = useTranslation();
    const navigate = useNavigate();

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
        navigate('/quizzes');
    }
    return (
        <div className="quiz-slide">
            <div className="quiz-slide-top">
                <Button onClick={handleStart}>
                    <>
                        <FontAwesomeIcon icon={faArrowLeft} />{' '}
                        {t('general.back')}
                    </>
                </Button>
                <h4>{`${questionIndex + 1} / ${maxQuestions}`}</h4>
            </div>
            <Question quiz={quiz} />
            <Answers quiz={quiz} />
            <Navigation />
        </div>
    );
}

export default Quiz;
