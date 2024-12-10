import React from 'react';
import { QuizProvider } from '../context/QuizContext';
import AllQuizes from '../components/allQuizes/AllQuizes';
import LanguageNavigation from '../components/allQuizes/LanguageNavigation';
import Header from '../components/Header';

function QuizzesPage() {
    return (
        <QuizProvider>
            <>
                <Header />
                <div className="container quizzes-page-container">
                    <LanguageNavigation />
                    <AllQuizes />
                </div>
            </>
        </QuizProvider>
    );
}

export default QuizzesPage;
