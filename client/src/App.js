import './App.css';
import quizzes from './db.json';
import { useState } from 'react';

function App() {
    const [polishLanguage, setPolishLanguage] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [finishedQuiz, setFinishedQuiz] = useState(false);
    const [answers, setAnswers] = useState({});
    const [pointsCounter, setPointsCounter] = useState(0);
    let allQuizzes = quizzes.quizzes;
    console.log(allQuizzes[0]);
    const maxQuestions = allQuizzes[0].questions.length;

    function handleAnswers(answer, id, quiz) {
        setAnswers((prev) => ({
            ...prev,
            [questionIndex]: answer,
        }));
        const correctAnswer = quiz.questions[questionIndex].correctAnswer;
        if (id === correctAnswer) setPointsCounter((prev) => prev + 1);
    }
    console.log(answers);
    console.log(pointsCounter);

    function handleNext() {
        if (questionIndex < maxQuestions - 1) {
            setQuestionIndex((prev) => (prev += 1));
        } else {
            setFinishedQuiz(true);
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => setPolishLanguage(true)}>PL</button>
                <button onClick={() => setPolishLanguage(false)}>EN</button>
            </div>
            <div>
                {allQuizzes.map((quiz, id) => (
                    <div key={id}>
                        <h1>{quiz.name}</h1>
                        <h3>Number of questions: {quiz.questions.length}</h3>
                        {questionIndex < 1 && (
                            <button onClick={() => setShowQuiz(true)}>
                                {polishLanguage
                                    ? 'Rozpocznij quiz'
                                    : 'Start quiz'}
                            </button>
                        )}

                        {showQuiz &&
                            questionIndex < maxQuestions &&
                            !finishedQuiz && (
                                <>
                                    <h2>
                                        {polishLanguage
                                            ? quiz.questions[questionIndex]
                                                  .question.pl
                                            : quiz.questions[questionIndex]
                                                  .question.en}
                                    </h2>
                                    <div>
                                        {polishLanguage ? (
                                            <div>
                                                {quiz.questions[
                                                    questionIndex
                                                ].answers.pl.map(
                                                    (answer, id) => (
                                                        <button
                                                            key={id}
                                                            onClick={() =>
                                                                handleAnswers(
                                                                    answer
                                                                )
                                                            }
                                                        >
                                                            {answer}
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        ) : (
                                            <div>
                                                {quiz.questions[
                                                    questionIndex
                                                ].answers.en.map(
                                                    (answer, id) => (
                                                        <button
                                                            key={id}
                                                            onClick={() =>
                                                                handleAnswers(
                                                                    answer,
                                                                    id,
                                                                    quiz
                                                                )
                                                            }
                                                        >
                                                            {answer}
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                    </div>
                ))}
                {showQuiz && !finishedQuiz && (
                    <button onClick={handleNext}>Next</button>
                )}
                {showQuiz && finishedQuiz && (
                    <div>
                        {polishLanguage ? (
                            <h2>Koniec quizu</h2>
                        ) : (
                            <h2>Quiz Completed</h2>
                        )}
                        {polishLanguage ? (
                            <h3>
                                Wynik: {(pointsCounter * 100) / maxQuestions} %
                            </h3>
                        ) : (
                            <h3>
                                Score: {(pointsCounter * 100) / maxQuestions} %
                            </h3>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
