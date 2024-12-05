import React from 'react';
import { QuizProvider } from '../context/QuizContext';
import AllQuizes from '../components/allQuizes/AllQuizes';
import LanguageNavigation from '../components/allQuizes/LanguageNavigation';
import Header from '../components/Header';

function QuizPage() {
    return (
        <QuizProvider>
            <>
                <Header />
                <div className="container">
                    <LanguageNavigation />
                    <AllQuizes />
                </div>
            </>
        </QuizProvider>
    );
}

export default QuizPage;
