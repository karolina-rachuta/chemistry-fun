import React, { useContext } from 'react';
import LastSlide from './LastSlide';
import Navigation from './Navigation';
import Quiz from './Quiz';
import FirstSlide from './FirstSlide';
import { QuizContext } from '../context/QuizContext';

function AllQuizes() {
    const { allQuizzes } = useContext(QuizContext);
    return (
        <div>
            {allQuizzes && allQuizzes.length > 0 ? (
                allQuizzes.map((quiz, id) => (
                    <div key={id}>
                        <FirstSlide quiz={quiz} />
                        <Quiz quiz={quiz} />
                    </div>
                ))
            ) : (
                <p>Loading quizzes...</p>
            )}
            <Navigation />
            <LastSlide />
        </div>
    );
}

export default AllQuizes;
