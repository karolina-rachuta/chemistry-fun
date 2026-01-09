import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './components/allQuizzes/context/QuizContext';
import HomePage from './page/HomePage';
import QuizzesPage from './page/QuizzesPage';
import QuizPage from './page/QuizPage';
import CalculatorsPage from './page/CalculatorsPage';
import './App.css';

function App() {
    return (
        <QuizProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quizzes" element={<QuizzesPage />} />
                    <Route path="/quizzes/:id" element={<QuizPage />} />
                    <Route path="/calculators" element={<CalculatorsPage />} />
                </Routes>
            </BrowserRouter>
        </QuizProvider>
    );
}

export default App;
