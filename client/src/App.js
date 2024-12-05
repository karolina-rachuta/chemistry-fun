import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import QuizPage from './page/QuizPage';

import './App.css';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quizes" element={<QuizPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
