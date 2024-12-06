import React, { useContext, useState } from 'react';
import { QuizContext } from '../../context/QuizContext';

function LastSlide({ quiz }) {
    const [showcorrectAnswers, setShowCorrectAnswers] = useState(false);
    const {
        answers,
        setAnswers,
        setPage,
        setQuestionIndex,
        polishLanguage,
        pointsCounter,
        setPointsCounter,
        maxQuestions,
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
        <div>
            <div className="last-slide-container">
                {polishLanguage ? (
                    <h2>Koniec quizu</h2>
                ) : (
                    <h2>Quiz Completed</h2>
                )}
                {polishLanguage ? (
                    <h3>Wynik: {(pointsCounter * 100) / maxQuestions} %</h3>
                ) : (
                    <h3>Score: {(pointsCounter * 100) / maxQuestions} %</h3>
                )}
                {showcorrectAnswers &&
                    quiz.questions.map((questionObj, id) => (
                        <div key={id} className="correct-answers-container">
                            <p>
                                {questionObj.question.id}.{' '}
                                {polishLanguage
                                    ? questionObj.question.pl
                                    : questionObj.question.en}
                            </p>
                            <p>
                                {' '}
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
                <div>
                    <button onClick={handleStart} className="btn">
                        {polishLanguage
                            ? 'Rozpocznij jeszcze raz!'
                            : 'Start again!'}
                    </button>
                    <button onClick={handleShowCorrectAnswers} className="btn">
                        {showcorrectAnswers
                            ? polishLanguage
                                ? 'Schowaj poprawne odpowiedzi'
                                : 'Hide correct answers'
                            : polishLanguage
                            ? 'Pokaż poprawne odpowiedzi'
                            : 'Show correct answers'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LastSlide;
