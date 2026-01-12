import { useTranslation } from 'react-i18next';

import { useQuizContext } from './context/useQuizContext';
import FirstSlide from './FirstSlide';

import './AllQuizzes.css';

function AllQuizzes() {
    const { t } = useTranslation();
    const { allQuizzes } = useQuizContext();

    return (
        <div className="quizzesContainer">
            {allQuizzes && allQuizzes.length > 0 ? (
                allQuizzes.map((quiz, id) => {
                    return <FirstSlide quiz={quiz} id={id} />;
                })
            ) : (
                <p>{t('general.loading')}</p>
            )}
        </div>
    );
}

export default AllQuizzes;
