import React from 'react';
import Header from '../components/Header';
import MetricCalculator from '../components/calculators/MetricCalculator';
import Footer from '../components/Footer';
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
