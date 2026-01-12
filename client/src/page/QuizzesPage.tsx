import AllQuizzes from '../components/allQuizzes/AllQuizzes';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import ComponentContainer from '../components/ui/ComponentContainer';

function QuizzesPage() {
    return (
        <>
            <Header />
            <ComponentContainer className="container" variant="pageContainer" spacing>
                <AllQuizzes />
            </ComponentContainer>
            <Footer />
        </>
    );
}

export default QuizzesPage;
