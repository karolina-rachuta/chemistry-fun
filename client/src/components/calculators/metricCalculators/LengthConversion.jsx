import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function LengthConversion() {
    const [lengthInput, setLengthInput] = useState(0);
    const [lengthResult, setLengthResult] = useState('');

    function handleLengthUnits(e) {
        if (e.target.value === 'inch') {
            setLengthResult(`${(lengthInput * 2.54).toFixed(2)} cm`);
        } else if (e.target.value === 'foot') {
            setLengthResult(`${(lengthInput * 30.48).toFixed(2)} cm`);
        } else if (e.target.value === 'yard') {
            setLengthResult(`${(lengthInput * 91.44).toFixed(2)} m`);
        } else if (e.target.value === 'mile') {
            setLengthResult(`${(lengthInput * 1.609).toFixed(2)} km`);
        } else return;
    }

    return (
        <div className="calculator-container">
            <h2>Length Conversion:</h2>
            <div className="calculator-box">
                <input
                    type="number"
                    value={lengthInput}
                    className="calculator-input"
                    onChange={(e) => setLengthInput(e.target.value)}
                />
                <button
                    onClick={(e) => handleLengthUnits(e)}
                    value={'inch'}
                    className="btn"
                >
                    inch <FontAwesomeIcon icon={faArrowRight} /> cm
                </button>
                <button
                    onClick={(e) => handleLengthUnits(e)}
                    value={'foot'}
                    className="btn"
                >
                    foot <FontAwesomeIcon icon={faArrowRight} /> cm
                </button>
                <button
                    onClick={(e) => handleLengthUnits(e)}
                    value={'yard'}
                    className="btn"
                >
                    yard <FontAwesomeIcon icon={faArrowRight} /> m
                </button>
                <button
                    onClick={(e) => handleLengthUnits(e)}
                    value={'mile'}
                    className="btn"
                >
                    mile <FontAwesomeIcon icon={faArrowRight} /> km
                </button>
            </div>
            <h3 className="calculator-result">Result: {lengthResult}</h3>
        </div>
    );
}

export default LengthConversion;
