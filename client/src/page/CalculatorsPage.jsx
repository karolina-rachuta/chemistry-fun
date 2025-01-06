import React from 'react';
import Header from '../components/Header';
import MetricCalculator from '../components/calculators/MetricCalculator';
function CalculatorsPage() {
    return (
        <>
            <Header />
            <div className="container quizzes-page-container">
                <MetricCalculator />
            </div>
        </>
    );
}

export default CalculatorsPage;
