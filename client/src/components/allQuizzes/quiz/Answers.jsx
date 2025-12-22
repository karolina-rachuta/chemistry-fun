import React, { useContext, useRef, useEffect } from 'react';
import { QuizContext } from '../../../context/QuizContext';

import Button from '../../ui/Button';
import './Answers.css';

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

    const answersList = polishLanguage
        ? quiz.questions[questionIndex].answers.pl
        : quiz.questions[questionIndex].answers.en;

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
            {
                <div className="answers-container" ref={answerContainer}>
                    {answersList.map((answer, id) => {
                        const isSelected =
                            answers[questionIndex + 1] === answer;
                        const isCorrect = id === correctAnswer;
                        return (
                            <Button
                                variant="answers"
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
                            </Button>
                        );
                    })}
                </div>
            }
        </div>
    );
}

export default Answers;
