import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function VolumeConversion() {
    const [volumeInput, setVolumeInput] = useState(0);
    const [volumeResult, setVolumeResult] = useState('');

    function handleVolumeUnits(e) {
        if (e.target.value === 'teaspoon') {
            setVolumeResult(`${(volumeInput * 4.92892).toFixed(2)} ml`);
        } else if (e.target.value === 'tablespoon') {
            setVolumeResult(`${(volumeInput * 14.7868).toFixed(2)} ml`);
        } else if (e.target.value === 'ounce') {
            setVolumeResult(`${(volumeInput * 29.5735).toFixed(2)} ml`);
        } else if (e.target.value === 'cup') {
            setVolumeResult(`${(volumeInput * 236.588).toFixed(2)} ml`);
        } else if (e.target.value === 'pint') {
            setVolumeResult(`${(volumeInput * 473.176).toFixed(2)} ml`);
        } else if (e.target.value === 'quart') {
            setVolumeResult(`${(volumeInput * 0.946353).toFixed(2)} l`);
        } else if (e.target.value === 'gallon') {
            setVolumeResult(`${(volumeInput * 3.78541).toFixed(2)} l`);
        } else return;
    }

    return (
        <div className="calculator-container">
            <h2>Volume Conversion:</h2>
            <div className="calculator-box">
                <input
                    type="number"
                    value={volumeInput}
                    className="calculator-input"
                    onChange={(e) => setVolumeInput(e.target.value)}
                />
                <button
                    onClick={(e) => handleVolumeUnits(e)}
                    value={'teaspoon'}
                    className="btn"
                >
                    teaspoon <FontAwesomeIcon icon={faArrowRight} /> ml
                </button>
                <button
                    onClick={(e) => handleVolumeUnits(e)}
                    value={'tablespoon'}
                    className="btn"
                >
                    tablespoon <FontAwesomeIcon icon={faArrowRight} /> ml
                </button>
                <button
                    onClick={(e) => handleVolumeUnits(e)}
                    value={'ounce'}
                    className="btn"
                >
                    fluid ounce <FontAwesomeIcon icon={faArrowRight} /> ml
                </button>
                <button
                    onClick={(e) => handleVolumeUnits(e)}
                    value={'cup'}
                    className="btn"
                >
                    cup <FontAwesomeIcon icon={faArrowRight} /> ml
                </button>
                <button
                    onClick={(e) => handleVolumeUnits(e)}
                    value={'pint'}
                    className="btn"
                >
                    pint <FontAwesomeIcon icon={faArrowRight} /> ml
                </button>
                <button
                    onClick={(e) => handleVolumeUnits(e)}
                    value={'quart'}
                    className="btn"
                >
                    quart <FontAwesomeIcon icon={faArrowRight} /> litre
                </button>
                <button
                    onClick={(e) => handleVolumeUnits(e)}
                    value={'gallon'}
                    className="btn"
                >
                    gallon
                    <FontAwesomeIcon icon={faArrowRight} /> litre
                </button>
            </div>
            <h3 className="calculator-result">Result: {volumeResult}</h3>
        </div>
    );
}

export default VolumeConversion;
