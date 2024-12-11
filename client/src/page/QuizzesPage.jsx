import React from 'react';
import AllQuizes from '../components/allQuizes/AllQuizes';
import LanguageNavigation from '../components/allQuizes/LanguageNavigation';
import Header from '../components/Header';

function QuizzesPage() {
    return (
        <>
            <Header />
            <div className="container quizzes-page-container">
                <LanguageNavigation />
                <AllQuizes />
            </div>
        </>
    );
}

export default QuizzesPage;
