import './App.css';
import quizzes from './db.json';
import { useState } from 'react';

function App() {
    const [polishLanguage, setPolishLanguage] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [finishedQuiz, setFinishedQuiz] = useState(false);
    const [answers, setAnswers] = useState({
        1: undefined,
        2: undefined,
    });
    let allQuizzes = quizzes.quizzes;
    const maxQuestions = allQuizzes[0].questions.length;

    function handleAnswers() {}
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
                                Start quiz
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
                                                ].answers.pl.map((answer) => (
                                                    <button>{answer}</button>
                                                ))}
                                            </div>
                                        ) : (
                                            <div>
                                                {quiz.questions[
                                                    questionIndex
                                                ].answers.en.map((answer) => (
                                                    <button
                                                        onClick={handleAnswers}
                                                    >
                                                        {answer}
                                                    </button>
                                                ))}
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
                {showQuiz && finishedQuiz && <h2>Quiz Completed</h2>}
            </div>
        </div>
    );
}

export default App;
