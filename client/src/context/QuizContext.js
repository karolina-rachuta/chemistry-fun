import { createContext, useState } from 'react';
import quizzes from '../db.json';

export const QuizContext = createContext();

export function QuizProvider({ children }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [polishLanguage, setPolishLanguage] = useState(false);
    const [page, setPage] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    // const [showQuiz, setShowQuiz] = useState(false);
    // const [finishedQuiz, setFinishedQuiz] = useState(false);
    // const [startedQuiz, setStarteddQuiz] = useState(true);
    const [pointsCounter, setPointsCounter] = useState(0);
    const [answers, setAnswers] = useState({});

    let allQuizzes = quizzes.quizzes;
    const maxQuestions = allQuizzes[0].questions.length;

    return (
        <QuizContext.Provider
            value={{
                page,
                setPage,
                // startedQuiz,
                // setStarteddQuiz,
                selectedAnswer,
                setSelectedAnswer,
                allQuizzes,
                maxQuestions,
                polishLanguage,
                setPolishLanguage,
                questionIndex,
                setQuestionIndex,
                // showQuiz,
                // setShowQuiz,
                // setFinishedQuiz,
                // finishedQuiz,
                answers,
                setAnswers,
                pointsCounter,
                setPointsCounter,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
}
