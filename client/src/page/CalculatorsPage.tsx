import Header from '../components/layout/header/Header';
import MetricCalculator from '../components/calculators/MetricCalculator';
import Footer from '../components/layout/footer/Footer';

function CalculatorsPage() {
    return (
        <>
            <Header />
            <div className="container quizzes-page-container">
                <MetricCalculator />
            </div>
            <Footer />
        </>
    );
}

export default CalculatorsPage;
