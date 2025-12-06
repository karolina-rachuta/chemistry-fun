import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import { MemoryContextProvider } from './context/MemoryContext';
import HomePage from './page/HomePage';
import QuizzesPage from './page/QuizzesPage';
import QuizPage from './page/QuizPage';
import CalculatorsPage from './page/CalculatorsPage';
import GamesPage from './page/GamesPage';
import './App.css';

function App() {
    return (
        <QuizProvider>
            <MemoryContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/quizzes" element={<QuizzesPage />} />
                        <Route path="/quizzes/:id" element={<QuizPage />} />
                        <Route
                            path="/calculators"
                            element={<CalculatorsPage />}
                        />
                        <Route path="/games" element={<GamesPage />} />
                    </Routes>
                </BrowserRouter>
            </MemoryContextProvider>
        </QuizProvider>
    );
}

export default App;
