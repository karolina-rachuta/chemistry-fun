import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { QuizContext } from '../context/QuizContext';
import Header from '../components/Header';
import LanguageNavigation from '../components/allQuizes/LanguageNavigation';
import Quiz from '../components/allQuizes/Quiz';
import LastSlide from '../components/allQuizes/LastSlide';

function QuizPage() {
    const { id } = useParams();
    const { page, allQuizzes } = useContext(QuizContext);
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
