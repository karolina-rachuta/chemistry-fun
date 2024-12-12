import React, { useContext, useRef, useEffect } from 'react';
import { QuizContext } from '../../../context/QuizContext';

function Answers({ quiz }) {
    const {
        storedAnswer,
        answers,
        isAnswered,
        setIsAnswered,
        setAnswers,
        questionIndex,
        setPointsCounter,
        polishLanguage,
    } = useContext(QuizContext);
    const answerContainer = useRef(null);

    const correctAnswer = quiz.questions[questionIndex].correctAnswer;

    useEffect(() => {
        setIsAnswered(!!storedAnswer);
    }, [questionIndex]);

    function handleAnswers(answer, id) {
        if (isAnswered) return;
        setIsAnswered(true);
        const allAnswers = answerContainer.current.children;

        setAnswers((prev) => ({
            ...prev,
            [questionIndex + 1]: answer,
        }));

        if (id === correctAnswer) {
            setPointsCounter((prev) => prev + 1);
            allAnswers[correctAnswer].style.background = 'green';
        } else {
            allAnswers[id].style.background = 'red';
        }
    }

    return (
        <div>
            {polishLanguage ? (
                <div className="answers-container" ref={answerContainer}>
                    {quiz.questions[questionIndex].answers.pl.map(
                        (answer, id) => {
                            const isSelected =
                                answers[questionIndex + 1] === answer;
                            const isCorrect = id === correctAnswer;
                            return (
                                <button
                                    className="btn-answers btn"
                                    value={answer}
                                    key={id}
                                    disabled={isAnswered}
                                    onClick={() => handleAnswers(answer, id)}
                                    style={{
                                        background: isSelected
                                            ? isCorrect
                                                ? 'green'
                                                : 'red'
                                            : '',
                                    }}
                                >
                                    {answer}
                                </button>
                            );
                        }
                    )}
                </div>
            ) : (
                <div ref={answerContainer} className="answers-container">
                    {quiz.questions[questionIndex].answers.en.map(
                        (answer, id) => {
                            const isSelected =
                                answers[questionIndex + 1] === answer;
                            const isCorrect = id === correctAnswer;
                            return (
                                <button
                                    className="btn"
                                    value={answer}
                                    key={id}
                                    disabled={isAnswered}
                                    onClick={() => handleAnswers(answer, id)}
                                    style={{
                                        background: isSelected
                                            ? isCorrect
                                                ? 'green'
                                                : 'red'
                                            : '',
                                    }}
                                >
                                    {answer}
                                </button>
                            );
                        }
                    )}
                </div>
            )}
        </div>
    );
}

export default Answers;
