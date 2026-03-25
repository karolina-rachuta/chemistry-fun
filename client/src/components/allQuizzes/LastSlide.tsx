import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { type Quiz } from './context/QuizContext';
import { useQuizContext } from './context/useQuizContext';

import './LastSlide.css';
import Button from '../ui/Button';
import ComponentContainer from '../ui/ComponentContainer';

type Props = {
    quiz: Quiz,
    maxQuestions: number
}

function LastSlide({ quiz, maxQuestions }: Props) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showcorrectAnswers, setShowCorrectAnswers] = useState(false);
    const {
        setAnswers,
        setPage,
        setQuestionIndex,
        polishLanguage,
        pointsCounter,
        setPointsCounter,
    } = useQuizContext();

    function handleStart() {
        setQuestionIndex(0);
        setPointsCounter(0);
        setPage(0);
        setAnswers([]);
    }

    function handleShowCorrectAnswers() {
        setShowCorrectAnswers((prev) => !prev);
    }

    function handleBackToQuizzes() {
        handleStart();
        navigate('/quizzes');
    }
    return (
        <ComponentContainer variant="quizSlide" spacing>
            <h2>{t('quizzes.quiz_completed')}</h2>
            <h3>
                {t('quizzes.score')} {(pointsCounter * 100) / maxQuestions}%
            </h3>

            <div className="last-slide-btn-box">
                <Button onClick={handleStart} variant="primary">
                    {t('quizzes.start_again')}
                </Button>
                <Button
                    variant="primary"
                    onClick={handleShowCorrectAnswers}
                    active={showcorrectAnswers}
                >
                    {showcorrectAnswers
                        ? t('quizzes.hide_answers')
                        : t('quizzes.show_answers')}
                </Button>
            </div>
            {showcorrectAnswers &&
                quiz.questions.map((questionObj, id) => (
                    <ComponentContainer key={id} variant='cardContainer'>
                        <p>
                            <b>Q:{' '}</b>
                            {questionObj.question.id}.{' '}
                            {polishLanguage
                                ? questionObj.question.pl
                                : questionObj.question.en}
                        </p>
                        <p>
                            <b>A:{' '}</b>
                            {polishLanguage
                                ? questionObj.answers.pl[
                                questionObj.correctAnswer
                                ]
                                : questionObj.answers.en[
                                questionObj.correctAnswer
                                ]}
                        </p>
                    </ComponentContainer>
                ))}
            <Button variant="back" onClick={handleBackToQuizzes}>
                <>
                    <FontAwesomeIcon icon={faArrowLeft} />{' '}
                    {t('quizzes.back_to_all_quizzes')}
                </>
            </Button>
        </ComponentContainer>
    );
}

export default LastSlide;
