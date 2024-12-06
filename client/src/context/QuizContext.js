import { createContext, useState } from 'react';
import quizzes from '../db.json';

export const QuizContext = createContext();

export function QuizProvider({ children }) {
    const [polishLanguage, setPolishLanguage] = useState(false);
    const [page, setPage] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [pointsCounter, setPointsCounter] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isAnswered, setIsAnswered] = useState(false);

    let allQuizzes = quizzes.quizzes;
    const maxQuestions = allQuizzes[0].questions.length;
    let storedAnswer = answers[questionIndex + 1];

    return (
        <QuizContext.Provider
            value={{
                storedAnswer,
                isAnswered,
                setIsAnswered,
                page,
                setPage,
                allQuizzes,
                maxQuestions,
                polishLanguage,
                setPolishLanguage,
                questionIndex,
                setQuestionIndex,
                answers,
                setAnswers,
                pointsCounter,
                setPointsCounter,
            }}
        >
            {' '}
            {children}{' '}
        </QuizContext.Provider>
    );
}
