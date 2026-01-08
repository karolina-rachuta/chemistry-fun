import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { type Quiz } from './context/QuizContext';
import { useQuizContext } from './context/useQuizContext';
import { useNavigate } from 'react-router-dom';
import Question from './quiz/Question';
import Answers from './quiz/Answers';
import Navigation from './Navigation';

import './Quiz.css';
import Button from '../ui/Button';

type Props = {
    quiz: Quiz,
    maxQuestions: number
}

export function Quiz({ quiz, maxQuestions }: Props) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const {
        questionIndex,
        setQuestionIndex,
        setAnswers,
        setPage,
        setPointsCounter,
    } = useQuizContext();

    function handleStart() {
        setQuestionIndex(0);
        setPointsCounter(0);
        setPage(0);
        setAnswers([]);
        navigate('/quizzes');
    }
    return (
        <div className="quiz-slide">
            <div className="quiz-slide-top">
                <Button
                    variant="primary"
                    onClick={handleStart}>
                    <>
                        <FontAwesomeIcon icon={faArrowLeft} />{' '}
                        {t('general.back')}
                    </>
                </Button>
                <h4>{`${questionIndex + 1} / ${maxQuestions}`}</h4>
            </div>
            <Question quiz={quiz} />
            <Answers quiz={quiz} />
            <Navigation />
        </div>
    );
}