import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { QuizProvider } from './context/QuizContext';

import HomePage from './page/HomePage';
import QuizzesPage from './page/QuizzesPage';
import QuizPage from './page/QuizPage';

import './App.css';

function App() {
    return (
        <QuizProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quizzes" element={<QuizzesPage />} />
                    <Route path="/quizzes/:id" element={<QuizPage />} />
                </Routes>
            </BrowserRouter>
        </QuizProvider>
    );
}

export default App;
