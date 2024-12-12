import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function MetricCalculator() {
    const [lengthInput, setLengthInput] = useState(0);
    const [result, setResult] = useState('');

    function handleUnit(e) {
        if (e.target.value === 'inch') {
            setResult(`${lengthInput * 2.54} cm`);
        } else if (e.target.value === 'foot') {
            setResult(`${lengthInput * 30.48} cm`);
        } else if (e.target.value === 'yard') {
            setResult(`${lengthInput * 91.44} m`);
        } else if (e.target.value === 'mile') {
            setResult(`${lengthInput * 1.609} km`);
        } else return;
    }
    return (
        <div>
            <h1>
                Metric <FontAwesomeIcon icon={faArrowRight} /> Imperial Units
                Calculator
                <div>
                    <h2>Length Conversion:</h2>
                    <div>
                        <input
                            type="number"
                            value={lengthInput}
                            onChange={(e) => setLengthInput(e.target.value)}
                        />
                        <button onClick={(e) => handleUnit(e)} value={'inch'}>
                            inch <FontAwesomeIcon icon={faArrowRight} /> cm
                        </button>
                        <button onClick={(e) => handleUnit(e)} value={'foot'}>
                            foot <FontAwesomeIcon icon={faArrowRight} /> cm
                        </button>
                        <button onClick={(e) => handleUnit(e)} value={'yard'}>
                            yard <FontAwesomeIcon icon={faArrowRight} /> m
                        </button>
                        <button onClick={(e) => handleUnit(e)} value={'mile'}>
                            mile <FontAwesomeIcon icon={faArrowRight} /> km
                        </button>
                    </div>
                    <div>
                        <h3>Result: {result}</h3>
                    </div>
                </div>
                <div>
                    <h2>Weight Conversion:</h2>
                </div>
                <div>
                    <h2>Temperature Conversion:</h2>
                </div>
            </h1>
        </div>
    );
}

export default MetricCalculator;
