import { createContext, useState } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

import quizzesData from '../../../data/db.json';

export type LangText = {
    id: number;
    pl: string;
    en: string;
};

export type AnswersByLang = {
    pl: string[];
    en: string[];
};

export type QuestionItem = {
    question: LangText;
    answers: AnswersByLang;
    correctAnswer: number;
};

export type Quiz = {
    id: number;
    name_pl: string;
    name_en: string;
    questions: QuestionItem[];
};

export type QuizzesData = {
    quizzes: Quiz[];
};

const quizzes = quizzesData as QuizzesData;

type QuizContextType = {
    storedAnswer: number | null;
    isAnswered: boolean;
    setIsAnswered: Dispatch<SetStateAction<boolean>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    allQuizzes: Quiz[];
    getNumberOfQuestions: (id: number) => number;
    polishLanguage: boolean;
    setPolishLanguage: Dispatch<SetStateAction<boolean>>;
    questionIndex: number;
    setQuestionIndex: Dispatch<SetStateAction<number>>;
    answers: Array<number | null>;
    setAnswers: Dispatch<SetStateAction<Array<number | null>>>;
    pointsCounter: number;
    setPointsCounter: Dispatch<SetStateAction<number>>;
};
export const QuizContext = createContext<QuizContextType | undefined>(
    undefined
);

type Props = {
    children: ReactNode;
};
export function QuizProvider({ children }: Props) {
    const [polishLanguage, setPolishLanguage] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [pointsCounter, setPointsCounter] = useState<number>(0);
    const [answers, setAnswers] = useState<Array<number | null>>([]);
    const [isAnswered, setIsAnswered] = useState<boolean>(false);

    let allQuizzes: Quiz[] = quizzes.quizzes;

    const getNumberOfQuestions = (quizIndex: number) =>
        allQuizzes[quizIndex].questions.length;

    let storedAnswer = answers[questionIndex + 1] ?? null;

    const value = {
        storedAnswer,
        isAnswered,
        setIsAnswered,
        page,
        setPage,
        allQuizzes,
        getNumberOfQuestions,
        polishLanguage,
        setPolishLanguage,
        questionIndex,
        setQuestionIndex,
        answers,
        setAnswers,
        pointsCounter,
        setPointsCounter,
    };
    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    );
}
