import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function TemperatureConversion() {
    const [temperatureInput, setTemperatureInput] = useState(0);
    const [temperatureResult, setTemperatureResult] = useState('');

    function handleTemperatureUnits(e) {
        if (e.target.value === 'f') {
            setTemperatureResult(
                `${(((temperatureInput - 32) * 5) / 9).toFixed(1)}`
            );
        } else return;
    }
    return (
        <div className="calculator-container">
            <h2>Temperature Conversion:</h2>
            <div className="calculator-box">
                <input
                    type="number"
                    value={temperatureInput}
                    className="calculator-input"
                    onChange={(e) => setTemperatureInput(e.target.value)}
                />
                <button
                    onClick={(e) => handleTemperatureUnits(e)}
                    value={'f'}
                    className="btn"
                >
                    &deg; F <FontAwesomeIcon icon={faArrowRight} /> &deg; C
                </button>
            </div>
            <h3 className="calculator-result">
                Result: {temperatureResult} &deg; C
            </h3>
        </div>
    );
}

export default TemperatureConversion;
