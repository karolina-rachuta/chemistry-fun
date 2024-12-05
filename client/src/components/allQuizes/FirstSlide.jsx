import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

function FirstSlide({ quiz }) {
    const { setPage, polishLanguage } = useContext(QuizContext);
    return (
        <>
            <h1>{polishLanguage ? quiz?.name_pl : quiz?.name_eng}</h1>
            <h3>
                {polishLanguage ? 'Liczba pytań: ' : 'Number of questions: '}
                {quiz?.questions.length}
            </h3>
            <button onClick={() => setPage(1)} className="btn">
                {polishLanguage ? 'Rozpocznij quiz' : 'Start quiz'}
            </button>
        </>
    );
}

export default FirstSlide;
