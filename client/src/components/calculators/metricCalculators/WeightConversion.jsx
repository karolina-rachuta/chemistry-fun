import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { WEIGHT_CONVERSION } from './constants';

import useContextWeight from './hooks/useContextWeight';

import './ConversionCalculator.css';

function WeightConversion() {
    const { t } = useTranslation();
    const {
        handleNotes,
        handleUnits,
        handleUnitsEnter,
        handleSavingNotes,
        handleDeletingNotes,
        state,
        dispatch,
    } = useContextWeight();

    useEffect(() => {
        handleNotes('weightNotes');
    }, []);

    return (
        <div className="calculator-container">
            <h2>{t('calculator.weight_conversion.hdl')}</h2>
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
                            handleUnitsEnter(28.3495, 'g', 'ounce');
                    }}
                />
                {WEIGHT_CONVERSION.map(({ value, multiplier, unit, id }) => (
                    <button
                        key={id}
                        onClick={() => handleUnits(multiplier, unit, value)}
                        className={
                            id === 1 && state.active ? 'btn active' : 'btn'
                        }
                    >
                        {t(`calculator.weight_conversion.${value}`)}{' '}
                        <FontAwesomeIcon icon={faArrowRight} /> {unit}
                    </button>
                ))}
            </div>

            <div className="calculator-box-result">
                <h3 className="calculator-result">
                    {' '}
                    {t('calculator.result')} {state.result}
                </h3>
                <button
                    className="btn"
                    onClick={() => handleSavingNotes('weightNotes')}
                    disabled={!state.input && !state.unit && !state.result}
                >
                    {t('calculator.save')}
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
                    <p> {t('calculator.no_notes')}</p>
                )}
                <button
                    className="btn btn-delete"
                    onClick={() => handleDeletingNotes('weightNotes')}
                >
                    {t('calculator.delete')}
                </button>
            </div>
        </div>
    );
}

export default WeightConversion;
