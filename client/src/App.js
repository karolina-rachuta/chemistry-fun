import './App.css';
import quizzes from "./db.json";
import { useState } from "react";

function App() {
    const [polishLanguage, setPolishLanguage] = useState(false);
   
    return (
        <div>
            <div>
                <button onClick={()=> setPolishLanguage(true)}>PL</button>
                <button onClick={()=> setPolishLanguage(false)}>EN</button>
            </div>
            <div>
                {quizzes.quizzes.map((quiz) => (
                    <div>
                        <h1>{quiz.name}</h1>
                        {quiz.questions.map((question) => (
                            polishLanguage ? (
                                <h2>{question.question.pl}</h2>
                                ) : (
                                    <h2>{question.question.en}</h2>
                                )
                        ))}
                    </div>
                ))}
            </div>
        </div>
  );
}

export default App;
