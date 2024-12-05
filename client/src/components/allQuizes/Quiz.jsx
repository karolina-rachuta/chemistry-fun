import React, { useContext } from 'react';
import Question from './quiz/Question';
import Answers from './quiz/Answers';
import { QuizContext } from '../../context/QuizContext';

function Quiz({ quiz }) {
    const { questionIndex, maxQuestions, finishedQuiz } =
        useContext(QuizContext);
    return (
        <>
            {questionIndex < maxQuestions && !finishedQuiz && (
                <div className="quiz-slide">
                    <span>{`${questionIndex + 1} / ${maxQuestions}`}</span>
                    <Question quiz={quiz} />
                    <Answers quiz={quiz} />
                </div>
            )}
        </>
    );
}

export default Quiz;