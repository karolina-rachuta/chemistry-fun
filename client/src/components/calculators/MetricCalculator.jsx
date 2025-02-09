import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import LengthConversion from './metricCalculators/LengthConversion';
import WeightConversion from './metricCalculators/WeightConversion';
import VolumeConversion from './metricCalculators/VolumeConversion';
import TemperatureConversion from './metricCalculators/TemperatureConversion';

function MetricCalculator() {
    return (
        <div className="metric-calculator-container">
            <h1>
                Imperial <FontAwesomeIcon icon={faArrowRight} /> Metric Units
                Calculator{' '}
            </h1>
            <LengthConversion />
            <WeightConversion />
            <TemperatureConversion />
            <VolumeConversion />
        </div>
    );
}

export default MetricCalculator;
