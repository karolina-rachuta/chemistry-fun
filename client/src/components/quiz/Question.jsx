import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

function Question({ quiz }) {
    const { polishLanguage, questionIndex } = useContext(QuizContext);

    return (
        <h2>
            {polishLanguage
                ? quiz.questions[questionIndex].question.pl
                : quiz.questions[questionIndex].question.en}
        </h2>
    );
}

export default Question;
