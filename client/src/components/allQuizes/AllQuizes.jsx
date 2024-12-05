import React, { useContext } from 'react';
import LastSlide from './LastSlide';
import Navigation from './Navigation';
import Quiz from './Quiz';
import FirstSlide from './FirstSlide';
import { QuizContext } from '../../context/QuizContext';

function AllQuizes() {
    const { page, maxQuestions, allQuizzes } = useContext(QuizContext);
    return (
        <div className="quizzes-container">
            {allQuizzes && allQuizzes.length > 0 ? (
                allQuizzes?.map((quiz, id) => (
                    <div key={id} className="quiz-container">
                        {page === 0 && <FirstSlide quiz={quiz} />}
                        {page > 0 && page < maxQuestions + 1 && (
                            <Quiz quiz={quiz} />
                        )}
                    </div>
                ))
            ) : (
                <p>Loading quizzes...</p>
            )}
            {page === maxQuestions + 1 && <LastSlide />}
            <Navigation />
        </div>
    );
}

export default AllQuizes;
