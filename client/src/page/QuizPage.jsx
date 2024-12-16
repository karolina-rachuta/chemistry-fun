import React, { useContext } from 'react';
import { useParams } from 'react-router';

import { QuizContext } from '../context/QuizContext';

import Header from '../components/Header';
import LanguageNavigation from '../components/allQuizzes/LanguageNavigation';
import Quiz from '../components/allQuizzes/Quiz';
import LastSlide from '../components/allQuizzes/LastSlide';

function QuizPage() {
    const { id } = useParams();
    const { allQuizzes, page } = useContext(QuizContext);
    const quiz = allQuizzes[id];
    let maxQuestions = quiz.questions.length;

    return (
        <>
            <Header />
            <div className="container quizzes-page-container">
                <LanguageNavigation />
                {page === maxQuestions ? (
                    <LastSlide
                        quiz={quiz}
                        id={id}
                        maxQuestions={maxQuestions}
                    />
                ) : (
                    <Quiz quiz={quiz} id={id} maxQuestions={maxQuestions} />
                )}
            </div>
        </>
    );
}

export default QuizPage;
