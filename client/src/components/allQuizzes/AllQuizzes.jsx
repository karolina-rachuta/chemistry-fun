import React, { useContext } from 'react';

import { QuizContext } from '../../context/QuizContext';

import FirstSlide from './FirstSlide';

function AllQuizzes() {
    const { allQuizzes } = useContext(QuizContext);

    return (
        <div className="quizzes-container">
            {allQuizzes && allQuizzes.length > 0 ? (
                allQuizzes?.map((quiz, id) => {
                    return <FirstSlide quiz={quiz} id={id} />;
                })
            ) : (
                <p>Loading quizzes...</p>
            )}
        </div>
    );
}

export default AllQuizzes;
