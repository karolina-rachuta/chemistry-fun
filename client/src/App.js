import './App.css';
import quizzes from './db.json';
import { useState } from 'react';

function App() {
    const [polishLanguage, setPolishLanguage] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const quiz = quizzes.quizzes[0];
    console.log(quiz);
    console.log(quizzes.quizzes[0].questions[0]);
    console.log(questionIndex);
    console.log(quiz.questions[questionIndex].question.pl);
    console.log(quiz.questions[questionIndex].answers.pl);

    return (
        <div>
            <div>
                <button onClick={() => setPolishLanguage(true)}>PL</button>
                <button onClick={() => setPolishLanguage(false)}>EN</button>
            </div>
            <div>
                {quizzes.quizzes.map((quiz, id) => (
                    <div key={id}>
                        <h1>{quiz.name}</h1>
                        <button>Start quiz</button>

                        <h2>
                            {polishLanguage
                                ? quiz.questions[questionIndex].question.pl
                                : quiz.questions[questionIndex].question.en}
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
                                        <button>{answer}</button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                <button onClick={() => setQuestionIndex((prev) => (prev += 1))}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;
