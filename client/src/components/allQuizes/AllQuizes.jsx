import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuizContext } from '../../context/QuizContext';

function AllQuizes() {
    const { allQuizzes, setPage, polishLanguage, setQuestionIndex } =
        useContext(QuizContext);

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
                                <Link
                                    to={`/quizzes/${id}`}
                                    // onClick={() => {
                                    //     setPage(1);
                                    //     setQuestionIndex(1);
                                    // }}
                                    className="btn"
                                >
                                    {polishLanguage
                                        ? 'Rozpocznij quiz'
                                        : 'Start quiz'}
                                </Link>
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
