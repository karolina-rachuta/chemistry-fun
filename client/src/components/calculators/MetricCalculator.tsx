import { useTranslation, Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import LengthConversion from './metricCalculators/LengthConversion';
import WeightConversion from './metricCalculators/WeightConversion';
import VolumeConversion from './metricCalculators/VolumeConversion';
import TemperatureConversion from './metricCalculators/TemperatureConversion';

import ComponentContainer from '../ui/ComponentContainer';

function MetricCalculator() {
    const { t } = useTranslation();
    return (
        <ComponentContainer variant="calculatorsContainer" spacing>
            <Trans>
                <h1 className='hdl text-center'>
                    {t('calculator.hdl_1')}{' '}
                    <FontAwesomeIcon icon={faArrowRight} />{' '}
                    {t('calculator.hdl_2')}
                </h1>
            </Trans>
            <LengthConversion />
            <WeightConversion />
            <TemperatureConversion />
            <VolumeConversion />
        </ComponentContainer>
    );
}

export default MetricCalculator;
