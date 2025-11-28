import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import LengthConversion from './metricCalculators/LengthConversion';
import WeightConversion from './metricCalculators/WeightConversion';
import VolumeConversion from './metricCalculators/VolumeConversion';
import TemperatureConversion from './metricCalculators/TemperatureConversion';

import { useTranslation, Trans } from 'react-i18next';
function MetricCalculator() {
    const { t } = useTranslation();
    return (
        <div className="metric-calculator-container">
            <Trans>
                <h1 style={{ textAlign: 'center' }}>
                    {t('calculator.hdl_1')}{' '}
                    <FontAwesomeIcon icon={faArrowRight} />{' '}
                    {t('calculator.hdl_2')}
                </h1>
            </Trans>
            <LengthConversion />
            <WeightConversion />
            <TemperatureConversion />
            <VolumeConversion />
        </div>
    );
}

export default MetricCalculator;
