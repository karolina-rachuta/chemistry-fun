import './App.css';
import AllQuizes from './components/AllQuizes';
import LanguageNavigation from './components/LanguageNavigation';
import { QuizProvider } from './context/QuizContext';

function App() {
    return (
        <QuizProvider>
            <div>
                <LanguageNavigation />
                <AllQuizes />
            </div>
        </QuizProvider>
    );
}

export default App;
