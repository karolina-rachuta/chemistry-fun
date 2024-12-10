import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuizContext } from '../../context/QuizContext';

function FirstSlide({ quiz, id }) {
    const { setPage, polishLanguage, setQuestionIndex } =
        useContext(QuizContext);
    return (
        <>
            <h1>{polishLanguage ? quiz?.name_pl : quiz?.name_eng}</h1>
            <h3>
                {polishLanguage ? 'Liczba pytań: ' : 'Number of questions: '}
                {quiz?.questions.length}
            </h3>
            <Link
                to={`/quizzes/${id}`}
                onClick={() => {
                    setPage(1);
                    setQuestionIndex(1);
                }}
                className="btn"
            >
                {polishLanguage ? 'Rozpocznij quiz' : 'Start quiz'}
            </Link>
        </>
    );
}

export default FirstSlide;
