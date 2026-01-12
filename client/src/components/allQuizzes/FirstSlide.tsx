import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { type Quiz } from './context/QuizContext';
import { useQuizContext } from './context/useQuizContext';
import ComponentContainer from '../ui/ComponentContainer';
import Button from '../ui/Button';

import './FirstSlide.css';

type Props = {
    quiz: Quiz,
    id: number
}

function FirstSlide({ quiz, id }: Props) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { polishLanguage } = useQuizContext();

    function handleStart(id: number) {
        navigate(`/quizzes/${id}`);
    }
    return (
        <ComponentContainer key={id} variant="quizContainer">
            <h1 className='hdl'>{polishLanguage ? quiz?.name_pl : quiz?.name_en}</h1>
            <div className="quiz-container-bottom">
                <h3 className='hdl'>
                    {t('quizzes.questions')}
                    {quiz?.questions.length}
                </h3>
                <Button
                    variant="primary"
                    onClick={() => {
                        handleStart(id);
                    }}
                >
                    {t('quizzes.start')}
                </Button>
            </div>
        </ComponentContainer>
    );
}

export default FirstSlide;
