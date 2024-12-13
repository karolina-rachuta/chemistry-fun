import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function WeightConversion() {
    const [weightInput, setWeightInput] = useState(0);
    const [weightResult, setWeightResult] = useState('');

    function handleWeightUnits(e) {
        if (e.target.value === 'ounce') {
            setWeightResult(`${weightInput * 28.3495} g`);
        } else if (e.target.value === 'pound') {
            setWeightResult(`${weightInput * 0.4536} kg`);
        } else if (e.target.value === 'ton') {
            setWeightResult(`${weightInput * 907.184} kg`);
        } else return;
    }
    return (
        <div>
            <h2>Weight Conversion:</h2>
            <div>
                <input
                    type="number"
                    value={weightInput}
                    onChange={(e) => setWeightInput(e.target.value)}
                />
                <button onClick={(e) => handleWeightUnits(e)} value={'ounce'}>
                    ounce <FontAwesomeIcon icon={faArrowRight} /> g
                </button>
                <button onClick={(e) => handleWeightUnits(e)} value={'pound'}>
                    pound <FontAwesomeIcon icon={faArrowRight} /> kg
                </button>
                <button onClick={(e) => handleWeightUnits(e)} value={'ton'}>
                    ton <FontAwesomeIcon icon={faArrowRight} /> kg
                </button>
            </div>
            <div>
                <h3>Result: {weightResult}</h3>
            </div>
        </div>
    );
}

export default WeightConversion;
