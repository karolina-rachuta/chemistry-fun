import React from 'react';
import AllQuizes from '../components/allQuizes/AllQuizes';
import LanguageNavigation from '../components/allQuizes/LanguageNavigation';
import { QuizProvider } from '../context/QuizContext';

function QuizPage() {
    return (
        <QuizProvider>
            <div>
                <LanguageNavigation />
                <AllQuizes />
            </div>
        </QuizProvider>
    );
}

export default QuizPage;
