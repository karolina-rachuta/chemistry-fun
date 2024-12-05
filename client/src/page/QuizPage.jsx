import React from 'react';
import AllQuizes from '../components/AllQuizes';
import LanguageNavigation from '../components/LanguageNavigation';
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
