import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { QuizContext } from '../../context/QuizContext';

function FirstSlide({ quiz, id }) {
    const navigate = useNavigate();
    const { polishLanguage } = useContext(QuizContext);

    function handleStart(id) {
        navigate(`/quizzes/${id}`);
    }
    return (
        <div key={id} className="quiz-container">
            <h1>{polishLanguage ? quiz?.name_pl : quiz?.name_eng}</h1>
            <div className="quiz-container-bottom">
                <h3>
                    {polishLanguage
                        ? 'Liczba pytań: '
                        : 'Number of questions: '}
                    {quiz?.questions.length}
                </h3>
                <button
                    onClick={() => {
                        handleStart(id);
                    }}
                    className="btn"
                >
                    {polishLanguage ? 'Rozpocznij quiz' : 'Start quiz'}
                </button>
            </div>
        </div>
    );
}

export default FirstSlide;
