import React from 'react';

import AllQuizzes from '../components/allQuizzes/AllQuizzes';
import LanguageNavigation from '../components/allQuizzes/LanguageNavigation';
import Header from '../components/Header';

function QuizzesPage() {
    return (
        <>
            <Header />
            <div className="container quizzes-page-container">
                <LanguageNavigation />
                <AllQuizzes />
            </div>
        </>
    );
}

export default QuizzesPage;
