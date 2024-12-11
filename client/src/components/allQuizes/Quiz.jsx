import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { QuizContext } from '../../context/QuizContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Question from './quiz/Question';
import Answers from './quiz/Answers';
import Navigation from './Navigation';

function Quiz({ quiz, id, maxQuestions }) {
    const {
        polishLanguage,
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
                    {polishLanguage ? (
                        <>
                            <FontAwesomeIcon icon={faArrowLeft} /> Powrót
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faArrowLeft} /> Back
                        </>
                    )}
                </Link>
                <h4>{`${questionIndex + 1} / ${maxQuestions}`}</h4>
            </div>
            <Question quiz={quiz} id={id} />
            <Answers quiz={quiz} id={id} />
            <Navigation id={id} maxQuestions={maxQuestions} />
        </div>
    );
}

export default Quiz;
