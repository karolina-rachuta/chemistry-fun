import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import {
    getNotes,
    saveNotes,
    deleteNotes,
} from '../../../helpers/storageHelper';

function TemperatureConversion() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const unitRef = useRef(null);
    const [temperatureInput, setTemperatureInput] = useState(0);
    const [temperatureResult, setTemperatureResult] = useState('');
    const [active, setActive] = useState(false);
    const [notes, setNotes] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const storedNotes = getNotes('tempNotes') || [];
        setNotes(storedNotes);
    }, []);
    function handleTemperatureUnits(e) {
        if (e.target.value === '°F') {
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

    function handleSavingNotes() {
        const newNote = `${inputRef.current.value} ${unitRef.current.value} => ${resultRef.current.textContent}`;
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        saveNotes('tempNotes', updatedNotes);
        setOpen(true);
    }

    function handleDeletingNotes() {
        setNotes([]);
        deleteNotes('tempNotes');
        setOpen(false);
    }

    return (
        <div className="calculator-container">
            <h2>Temperature Conversion:</h2>
            <div className="calculator-box">
                <input
                    type="number"
                    ref={inputRef}
                    value={temperatureInput}
                    className="calculator-input"
                    onChange={(e) => setTemperatureInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleTemperatureUnitsEnter();
                    }}
                />
                <button
                    onClick={(e) => handleTemperatureUnits(e)}
                    value={'°F'}
                    ref={unitRef}
                    className={active ? 'btn active' : 'btn'}
                >
                    &deg; F <FontAwesomeIcon icon={faArrowRight} /> &deg; C
                </button>
            </div>
            <div className="calculator-box-result">
                <h3
                    className="calculator-result"
                    ref={resultRef}
                    value={temperatureResult}
                >
                    Result: {temperatureResult}
                </h3>
                <button className="btn" onClick={handleSavingNotes}>
                    Save notes
                </button>
            </div>
            <div className={open ? 'calculator-notes-box' : 'no-visible'}>
                <h2>Notes:</h2>
                {notes.length > 0 ? (
                    <ul>
                        {notes.map((note, index) => (
                            <li key={index}>{note}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No notes saved.</p>
                )}
                <button
                    className="btn btn-delete"
                    onClick={handleDeletingNotes}
                >
                    Delete all notes
                </button>
            </div>
        </div>
    );
}

export default TemperatureConversion;
