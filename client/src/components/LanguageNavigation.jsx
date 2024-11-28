import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

function LanguageNavigation() {
    const { setPolishLanguage } = useContext(QuizContext);
    return (
        <div>
            <button onClick={() => setPolishLanguage(true)}>PL</button>
            <button onClick={() => setPolishLanguage(false)}>EN</button>
        </div>
    );
}

export default LanguageNavigation;
