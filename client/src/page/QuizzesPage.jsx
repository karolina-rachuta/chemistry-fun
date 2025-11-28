import React from 'react';

import AllQuizzes from '../components/allQuizzes/AllQuizzes';
import Header from '../components/Header';
import Footer from '../components/Footer';

function QuizzesPage() {
    return (
        <>
            <Header />
            <div className="container quizzes-page-container">
                <AllQuizzes />
            </div>
            <Footer />
        </>
    );
}

export default QuizzesPage;
