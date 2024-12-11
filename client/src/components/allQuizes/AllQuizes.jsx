import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../context/QuizContext';

function AllQuizes() {
    const navigate = useNavigate();
    const { allQuizzes, polishLanguage } = useContext(QuizContext);

    function handleStart(id) {
        navigate(`/quizzes/${id}`);
    }

    return (
        <div className="quizzes-container">
            {allQuizzes && allQuizzes.length > 0 ? (
                allQuizzes?.map((quiz, id) => {
                    return (
                        <div key={id} className="quiz-container">
                            <h1>
                                {polishLanguage
                                    ? quiz?.name_pl
                                    : quiz?.name_eng}
                            </h1>
                            <div className="quiz-container-bottom">
                                <h3>
                                    {polishLanguage
                                        ? 'Liczba pytań: '
                                        : 'Number of questions: '}
                                    {quiz?.questions.length}
                                </h3>
                                <button
                                    onClick={() => {
                                        handleStart(id);
                                    }}
                                    className="btn"
                                >
                                    {polishLanguage
                                        ? 'Rozpocznij quiz'
                                        : 'Start quiz'}
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>Loading quizzes...</p>
            )}
        </div>
    );
}

export default AllQuizes;
