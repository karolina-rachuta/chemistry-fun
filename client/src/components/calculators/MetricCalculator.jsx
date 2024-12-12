import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function MetricCalculator() {
    const [lengthInput, setLengthInput] = useState(0);
    const [lengthResult, setLengthResult] = useState('');
    const [weightInput, setWeightInput] = useState(0);
    const [weightResult, setWeightResult] = useState('');

    function handleLengthUnits(e) {
        if (e.target.value === 'inch') {
            setLengthResult(`${lengthInput * 2.54} cm`);
        } else if (e.target.value === 'foot') {
            setLengthResult(`${lengthInput * 30.48} cm`);
        } else if (e.target.value === 'yard') {
            setLengthResult(`${lengthInput * 91.44} m`);
        } else if (e.target.value === 'mile') {
            setLengthResult(`${lengthInput * 1.609} km`);
        } else return;
    }
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
                        <button
                            onClick={(e) => handleLengthUnits(e)}
                            value={'inch'}
                        >
                            inch <FontAwesomeIcon icon={faArrowRight} /> cm
                        </button>
                        <button
                            onClick={(e) => handleLengthUnits(e)}
                            value={'foot'}
                        >
                            foot <FontAwesomeIcon icon={faArrowRight} /> cm
                        </button>
                        <button
                            onClick={(e) => handleLengthUnits(e)}
                            value={'yard'}
                        >
                            yard <FontAwesomeIcon icon={faArrowRight} /> m
                        </button>
                        <button
                            onClick={(e) => handleLengthUnits(e)}
                            value={'mile'}
                        >
                            mile <FontAwesomeIcon icon={faArrowRight} /> km
                        </button>
                    </div>
                    <div>
                        <h3>Result: {lengthResult}</h3>
                    </div>
                </div>
                <div>
                    <h2>Weight Conversion:</h2>
                    <div>
                        <input
                            type="number"
                            value={weightInput}
                            onChange={(e) => setWeightInput(e.target.value)}
                        />
                        <button
                            onClick={(e) => handleWeightUnits(e)}
                            value={'ounce'}
                        >
                            ounce <FontAwesomeIcon icon={faArrowRight} /> g
                        </button>
                        <button
                            onClick={(e) => handleWeightUnits(e)}
                            value={'pound'}
                        >
                            pound <FontAwesomeIcon icon={faArrowRight} /> kg
                        </button>
                        <button
                            onClick={(e) => handleWeightUnits(e)}
                            value={'ton'}
                        >
                            ton <FontAwesomeIcon icon={faArrowRight} /> kg
                        </button>
                    </div>
                    <div>
                        <h3>Result: {weightResult}</h3>
                    </div>
                </div>
                <div>
                    <h2>Temperature Conversion:</h2>
                    <div>
                        <input
                            type="number"
                            value={lengthInput}
                            onChange={(e) => setLengthInput(e.target.value)}
                        />
                        <button
                            onClick={(e) => handleLengthUnits(e)}
                            value={'inch'}
                        >
                            inch <FontAwesomeIcon icon={faArrowRight} /> cm
                        </button>
                        <button
                            onClick={(e) => handleLengthUnits(e)}
                            value={'foot'}
                        >
                            foot <FontAwesomeIcon icon={faArrowRight} /> cm
                        </button>
                        <button
                            onClick={(e) => handleLengthUnits(e)}
                            value={'yard'}
                        >
                            yard <FontAwesomeIcon icon={faArrowRight} /> m
                        </button>
                        <button
                            onClick={(e) => handleLengthUnits(e)}
                            value={'mile'}
                        >
                            mile <FontAwesomeIcon icon={faArrowRight} /> km
                        </button>
                    </div>
                    <div>
                        <h3>Result: {lengthResult}</h3>
                    </div>
                </div>
            </h1>
        </div>
    );
}

export default MetricCalculator;
