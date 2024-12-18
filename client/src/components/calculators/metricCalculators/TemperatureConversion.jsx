import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TEMPERATURE_CONVERSION } from './constants';
import useContextTemperature from './hooks/useContextTemperature';

function TemperatureConversion() {
    const {
        handleNotes,
        handleUnits,
        handleUnitsEnter,
        handleSavingNotes,
        handleDeletingNotes,
        state,
        dispatch,
    } = useContextTemperature();

    useEffect(() => handleNotes('tempNotes'), []);

    return (
        <div className="calculator-container">
            <h2>Length Conversion:</h2>
            <div className="calculator-box">
                <input
                    type="number"
                    value={state.input}
                    className="calculator-input"
                    onChange={(e) =>
                        dispatch({
                            type: 'SET_INPUT',
                            payload: e.target.value,
                        })
                    }
                    onKeyDown={(e) => {
                        if (e.key === 'Enter')
                            handleUnitsEnter(0.55555, 32, '°C', '°F');
                    }}
                />
                {TEMPERATURE_CONVERSION.map(
                    ({ value, multiplier, substract, unit, id }) => (
                        <button
                            key={id}
                            onClick={() =>
                                handleUnits(multiplier, substract, unit, value)
                            }
                            className={
                                id === 1 && state.active ? 'btn active' : 'btn'
                            }
                        >
                            {value} <FontAwesomeIcon icon={faArrowRight} />{' '}
                            {unit}
                        </button>
                    )
                )}
            </div>

            <div className="calculator-box-result">
                <h3 className="calculator-result">Result: {state.result}</h3>
                <button
                    className="btn"
                    onClick={() => handleSavingNotes('tempNotes')}
                    disabled={!state.input && !state.unit && !state.result}
                >
                    Save notes
                </button>
            </div>
            <div className={state.open ? 'calculator-notes-box' : 'no-visible'}>
                <h2>Notes:</h2>
                {state.notes.length > 0 ? (
                    <ul>
                        {state.notes.map((note, index) => (
                            <li key={index}>{note}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No notes saved.</p>
                )}
                <button
                    className="btn btn-delete"
                    onClick={() => handleDeletingNotes('tempNotes')}
                >
                    Delete all notes
                </button>
            </div>
        </div>
    );
}

export default TemperatureConversion;
