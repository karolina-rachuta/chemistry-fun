import Header from '../components/layout/header/Header';
import MetricCalculator from '../components/calculators/MetricCalculator';
import Footer from '../components/layout/footer/Footer';
import ComponentContainer from '../components/ui/ComponentContainer';

function CalculatorsPage() {
    return (
        <>
            <Header />
            <ComponentContainer className="container" variant="pageContainer">
                <MetricCalculator />
            </ComponentContainer>
            <Footer />
        </>
    );
}

export default CalculatorsPage;
