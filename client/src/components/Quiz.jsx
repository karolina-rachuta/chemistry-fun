import React, { useContext } from 'react';
import Question from './quiz/Question';
import Answers from './quiz/Answers';
import { QuizContext } from '../context/QuizContext';

function Quiz({ quiz }) {
    const { showQuiz, questionIndex, maxQuestions, finishedQuiz } =
        useContext(QuizContext);
    return (
        <>
            {showQuiz && questionIndex < maxQuestions && !finishedQuiz && (
                <>
                    <Question quiz={quiz} />
                    <Answers quiz={quiz} />
                </>
            )}
        </>
    );
}

export default Quiz;
