import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function WeightConversion() {
    const [weightInput, setWeightInput] = useState(0);
    const [weightResult, setWeightResult] = useState('');
    const [active, setActive] = useState(false);

    function handleWeightUnits(e) {
        if (e.target.value === 'ounce') {
            setWeightResult(`${(weightInput * 28.3495).toFixed(2)} g`);
        } else if (e.target.value === 'pound') {
            setWeightResult(`${(weightInput * 0.4536).toFixed(2)} kg`);
            setActive(false);
        } else if (e.target.value === 'stone') {
            setWeightResult(`${(weightInput * 6.35029).toFixed(2)} kg`);
            setActive(false);
        } else if (e.target.value === 'ton') {
            setWeightResult(`${(weightInput * 907.184).toFixed(2)} kg`);
            setActive(false);
        } else return;
    }

    function handleWeightUnitsEnter() {
        setWeightResult(`${(weightInput * 28.3495).toFixed(2)} g`);
        setActive(true);
    }

    return (
        <div className="calculator-container">
            <h2>Weight Conversion:</h2>
            <div className="calculator-box">
                <input
                    type="number"
                    value={weightInput}
                    className="calculator-input"
                    onChange={(e) => setWeightInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleWeightUnitsEnter();
                    }}
                />
                <button
                    onClick={(e) => handleWeightUnits(e)}
                    value={'ounce'}
                    className={active ? 'btn active' : 'btn'}
                >
                    ounce <FontAwesomeIcon icon={faArrowRight} /> g
                </button>
                <button
                    onClick={(e) => handleWeightUnits(e)}
                    value={'pound'}
                    className="btn"
                >
                    pound <FontAwesomeIcon icon={faArrowRight} /> kg
                </button>
                <button
                    onClick={(e) => handleWeightUnits(e)}
                    value={'stone'}
                    className="btn"
                >
                    stone <FontAwesomeIcon icon={faArrowRight} /> kg
                </button>
                <button
                    onClick={(e) => handleWeightUnits(e)}
                    value={'ton'}
                    className="btn"
                >
                    ton <FontAwesomeIcon icon={faArrowRight} /> kg
                </button>
            </div>
            <h3 className="calculator-result">Result: {weightResult}</h3>
        </div>
    );
}

export default WeightConversion;
