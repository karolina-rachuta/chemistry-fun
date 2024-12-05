import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

function LanguageNavigation() {
    const { polishLanguage, setPolishLanguage } = useContext(QuizContext);
    return (
        <div className="language-nav">
            <button
                className={polishLanguage ? 'btn active' : 'btn'}
                onClick={() => setPolishLanguage(true)}
            >
                PL
            </button>
            <button
                className={polishLanguage ? 'btn' : 'btn active'}
                onClick={() => setPolishLanguage(false)}
            >
                EN
            </button>
        </div>
    );
}

export default LanguageNavigation;
