import React, { useContext } from 'react';
import Question from './quiz/Question';
import Answers from './quiz/Answers';
import { QuizContext } from '../../context/QuizContext';
import Navigation from './Navigation';

function Quiz({ quiz, id, maxQuestions }) {
    const { questionIndex } = useContext(QuizContext);
    return (
        <div className="quiz-slide">
            <span>{`${questionIndex + 1} / ${maxQuestions}`}</span>
            <Question quiz={quiz} id={id} />
            <Answers quiz={quiz} id={id} />
            <Navigation id={id} maxQuestions={maxQuestions} />
        </div>
    );
}

export default Quiz;
