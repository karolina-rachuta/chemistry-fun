import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function LengthConversion() {
    const [lengthInput, setLengthInput] = useState(0);
    const [lengthResult, setLengthResult] = useState('');

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

    return (
        <div>
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
        </div>
    );
}

export default LengthConversion;
