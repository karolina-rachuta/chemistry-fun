import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import {
    getNotes,
    saveNotes,
    deleteNotes,
} from '../../../helpers/storageHelper';

function LengthConversion() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const unitRef = useRef(null);
    const [lengthInput, setLengthInput] = useState(0);
    const [lengthResult, setLengthResult] = useState('');
    const [active, setActive] = useState(false);
    const [notes, setNotes] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const storedNotes = getNotes('lengthNotes');
        setNotes(storedNotes);
    }, []);

    function handleLengthUnits(e) {
        if (e.target.value === 'inch') {
            setLengthResult(`${(lengthInput * 2.54).toFixed(2)} cm`);
        } else if (e.target.value === 'foot') {
            setLengthResult(`${(lengthInput * 30.48).toFixed(2)} cm`);
            setActive(false);
        } else if (e.target.value === 'yard') {
            setLengthResult(`${(lengthInput * 91.44).toFixed(2)} m`);
            setActive(false);
        } else if (e.target.value === 'mile') {
            setLengthResult(`${(lengthInput * 1.609).toFixed(2)} km`);
            setActive(false);
        } else return;
    }

    function handleLengthUnitsEnter(e) {
        setLengthResult(`${(lengthInput * 2.54).toFixed(2)} cm`);
        setActive(true);
    }

    function handleSavingNotes() {
        const newNote = `${inputRef.current.value} ${resultRef.current.textContent}`;
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        saveNotes('lengthNotes', updatedNotes);
        setOpen(true);
    }

    function handleDeletingNotes() {
        setNotes([]);
        deleteNotes('lengthNotes');
        setOpen(false);
    }

    return (
        <div className="calculator-container">
            <h2>Length Conversion:</h2>
            <div className="calculator-box">
                <input
                    type="number"
                    ref={inputRef}
                    value={lengthInput}
                    className="calculator-input"
                    onChange={(e) => setLengthInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleLengthUnitsEnter(e);
                    }}
                />
                <button
                    onClick={(e) => handleLengthUnits(e)}
                    value={'inch'}
                    className={active ? 'btn active' : 'btn'}
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
            <div className="calculator-box-result">
                <h3 className="calculator-result" ref={resultRef}>
                    Result: {lengthResult}
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

export default LengthConversion;
