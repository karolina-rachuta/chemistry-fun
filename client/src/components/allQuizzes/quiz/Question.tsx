import { useQuizContext } from '../context/useQuizContext';
import { type Quiz } from '../context/QuizContext';

function Question({ quiz }: { quiz: Quiz }) {
    const { polishLanguage, questionIndex } = useQuizContext();

    return (
        <h2 className='hdl'>
            {polishLanguage
                ? quiz.questions[questionIndex].question.pl
                : quiz.questions[questionIndex].question.en}
        </h2>
    );
}

export default Question;
