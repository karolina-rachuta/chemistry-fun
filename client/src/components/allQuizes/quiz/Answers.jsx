import React, { useContext, useState, useRef, useEffect } from 'react';
import { QuizContext } from '../../../context/QuizContext';

function Answers({ quiz }) {
    const {
        selectedAnswer,
        setSelectedAnswer,
        setAnswers,
        questionIndex,
        setPointsCounter,
        polishLanguage,
    } = useContext(QuizContext);
    const answerContainer = useRef(null);

    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        setSelectedAnswer(null);
        const allAnswers = answerContainer.current.children;
        Array.from(allAnswers).forEach((button) => {
            button.style.background = '';
        });
        setIsAnswered(false);
    }, [questionIndex]);

    function handleAnswers(answer, id, quiz) {
        if (isAnswered) return;
        setSelectedAnswer(id);
        setIsAnswered(true);
        const allAnswers = answerContainer.current.children;

        setAnswers((prev) => ({
            ...prev,
            [questionIndex + 1]: answer,
        }));

        const correctAnswer = quiz.questions[questionIndex].correctAnswer;
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
                        (answer, id) => (
                            <button
                                className="btn"
                                key={id}
                                disabled={isAnswered}
                                onClick={() => handleAnswers(answer, id, quiz)}
                            >
                                {answer}
                            </button>
                        )
                    )}
                </div>
            ) : (
                <div ref={answerContainer} className="answers-container">
                    {quiz.questions[questionIndex].answers.en.map(
                        (answer, id) => (
                            <button
                                className="btn"
                                key={id}
                                disabled={isAnswered}
                                onClick={() => handleAnswers(answer, id, quiz)}
                            >
                                {answer}
                            </button>
                        )
                    )}
                </div>
            )}
        </div>
    );
}

export default Answers;
