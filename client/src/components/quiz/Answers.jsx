import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

function Answers({ quiz }) {
    const { setAnswers, questionIndex, setPointsCounter, polishLanguage } =
        useContext(QuizContext);

    function handleAnswers(answer, id, quiz) {
        setAnswers((prev) => ({
            ...prev,
            [questionIndex]: answer,
        }));
        const correctAnswer = quiz.questions[questionIndex].correctAnswer;
        if (id === correctAnswer) setPointsCounter((prev) => prev + 1);
    }

    return (
        <div>
            {polishLanguage ? (
                <div>
                    {quiz.questions[questionIndex].answers.pl.map(
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
            ) : (
                <div>
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
