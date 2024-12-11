import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { QuizContext } from '../../context/QuizContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function LastSlide({ quiz, maxQuestions }) {
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
            {polishLanguage ? <h2>Quiz ukończony</h2> : <h2>Quiz Completed</h2>}
            {polishLanguage ? (
                <h3>Wynik: {(pointsCounter * 100) / maxQuestions}%</h3>
            ) : (
                <h3>Score: {(pointsCounter * 100) / maxQuestions}%</h3>
            )}

            <div className="last-slide-btn-box">
                <button onClick={handleStart} className="btn">
                    {polishLanguage ? 'Jeszcze raz!' : 'Start again!'}
                </button>
                <button
                    onClick={handleShowCorrectAnswers}
                    className={showcorrectAnswers ? 'btn active' : 'btn'}
                >
                    {showcorrectAnswers
                        ? polishLanguage
                            ? 'Schowaj odpowiedzi'
                            : 'Hide answers'
                        : polishLanguage
                        ? 'Pokaż odpowiedzi'
                        : 'Show answers'}
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
                            -{' '}
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
                {polishLanguage ? (
                    <>
                        <FontAwesomeIcon icon={faArrowLeft} /> Wszystkie quizy
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faArrowLeft} /> Back to All
                        Quizzes
                    </>
                )}
            </Link>
        </div>
    );
}

export default LastSlide;
