import { useParams } from 'react-router-dom';

import { useQuizContext } from '../components/allQuizzes/context/useQuizContext';
import { type Quiz as QuizType } from '../components/allQuizzes/context/QuizContext';

import Header from '../components/layout/header/Header';
import { Quiz } from '../components/allQuizzes/Quiz';
import LastSlide from '../components/allQuizzes/LastSlide';

function QuizPage() {
    const { id } = useParams<{ id: string }>();
    const index = Number(id)

    const { allQuizzes, page } = useQuizContext();

    const quiz: QuizType = allQuizzes[index];
    let maxQuestions: number = quiz.questions.length;

    return (
        <>
            <Header />
            <div className="container quizzes-page-container">
                {page === maxQuestions ? (
                    <LastSlide
                        quiz={quiz}
                        maxQuestions={maxQuestions}
                    />
                ) : (
                    <Quiz quiz={quiz} maxQuestions={maxQuestions} />
                )}
            </div>
        </>
    );
}

export default QuizPage;
