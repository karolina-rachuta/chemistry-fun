import React, { useContext, useState, useRef } from 'react';
import { QuizContext } from '../../context/QuizContext';

function Answers({ quiz }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const { setAnswers, questionIndex, setPointsCounter, polishLanguage } =
        useContext(QuizContext);
    const answerContainer = useRef(null);

    function handleAnswers(answer, id, quiz) {
        setSelectedAnswer(id);
        setAnswers((prev) => ({
            ...prev,
            [questionIndex]: answer,
        }));
        const allAnswers = answerContainer.current.children;
        Array.from(allAnswers).forEach((button) => {
            button.style.background = '';
        });

        allAnswers[id].style.background = 'yellow';
        console.log(answer);

        const correctAnswer = quiz.questions[questionIndex].correctAnswer;
        if (id === correctAnswer) setPointsCounter((prev) => prev + 1);
    }

    return (
        <div>
            {polishLanguage ? (
                <div ref={answerContainer}>
                    {quiz.questions[questionIndex].answers.pl.map(
                        (answer, id) => (
                            <button
                                key={id}
                                value={id}
                                onClick={() => handleAnswers(answer, id, quiz)}
                            >
                                {answer}
                            </button>
                        )
                    )}
                </div>
            ) : (
                <div ref={answerContainer}>
                    {quiz.questions[questionIndex].answers.en.map(
                        (answer, id) => (
                            <button
                                key={id}
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
