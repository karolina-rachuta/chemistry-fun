import React from 'react';
import Header from '../components/Header';
import LanguageNavigation from '../components/allQuizzes/LanguageNavigation';
import MetricCalculator from '../components/calculators/MetricCalculator';
function CalculatorsPage() {
    return (
        <>
            <Header />
            <div className="container quizzes-page-container">
                <LanguageNavigation />
                <MetricCalculator />
            </div>
        </>
    );
}

export default CalculatorsPage;
