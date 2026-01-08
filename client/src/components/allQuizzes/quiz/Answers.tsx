import { useRef, useEffect } from 'react';
import { useQuizContext } from '../context/useQuizContext';
import { type Quiz } from '../context/QuizContext';

import Button from '../../ui/Button';
import './Answers.css';

type Props = {
    quiz: Quiz
}
function Answers({ quiz }: Props) {
    const {
        storedAnswer,
        answers,
        isAnswered,
        setIsAnswered,
        setAnswers,
        questionIndex,
        setPointsCounter,
        polishLanguage,
    } = useQuizContext();

    const answerContainer = useRef<HTMLDivElement | null>(null);

    const correctAnswer = quiz.questions[questionIndex].correctAnswer;

    const answersList = polishLanguage
        ? quiz.questions[questionIndex].answers.pl
        : quiz.questions[questionIndex].answers.en;

    useEffect(() => {
        setIsAnswered(!!storedAnswer);
    }, [questionIndex]);

    function handleAnswers(id: number) {
        if (isAnswered) return;
        setIsAnswered(true);

        setAnswers((prev) => {
            const copy = [...prev];
            copy[questionIndex + 1] = id;
            return copy;
        });

        if (id === correctAnswer) {
            setPointsCounter((prev) => prev + 1);
        }
    }

    return (
        <div>
            {
                <div className="answers-container" ref={answerContainer}>
                    {answersList.map((answer, id) => {
                        const isSelected =
                            answers[questionIndex + 1] === id;
                        const isCorrect = id === correctAnswer;
                        return (
                            <Button
                                variant="answers"
                                value={answer}
                                key={id}
                                disabled={isAnswered}
                                onClick={() => handleAnswers(id)}
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
