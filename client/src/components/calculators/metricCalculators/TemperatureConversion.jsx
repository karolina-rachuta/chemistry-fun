import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function TemperatureConversion() {
    const [temperatureInput, setTemperatureInput] = useState(0);
    const [temperatureResult, setTemperatureResult] = useState('');
    const [active, setActive] = useState(false);

    function handleTemperatureUnits(e) {
        if (e.target.value === 'f') {
            setTemperatureResult(
                `${(((temperatureInput - 32) * 5) / 9).toFixed(1)}°C`
            );
        } else return;
    }

    function handleTemperatureUnitsEnter() {
        setTemperatureResult(
            `${(((temperatureInput - 32) * 5) / 9).toFixed(1)}°C`
        );
        setActive(true);
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
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleTemperatureUnitsEnter();
                    }}
                />
                <button
                    onClick={(e) => handleTemperatureUnits(e)}
                    value={'f'}
                    className={active ? 'btn active' : 'btn'}
                >
                    &deg; F <FontAwesomeIcon icon={faArrowRight} /> &deg; C
                </button>
            </div>
            <h3 className="calculator-result">Result: {temperatureResult}</h3>
        </div>
    );
}

export default TemperatureConversion;
