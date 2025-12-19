import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { LENGTH_CONVERSION } from './constants';
import Button from '../../ui/Button';
import useContextLength from './hooks/useContextLength';

import './ConversionCalculator.css';

function LengthConversion() {
    const { t } = useTranslation();
    const {
        handleNotes,
        handleUnits,
        handleUnitsEnter,
        handleSavingNotes,
        handleDeletingNotes,
        state,
        dispatch,
    } = useContextLength();

    useEffect(() => handleNotes('lengthNotes'), []);

    return (
        <div className="calculator-container">
            <h2>{t('calculator.length_conversion.hdl')}</h2>
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
                            handleUnitsEnter(2.54, 'cm', 'inch');
                    }}
                />
                {LENGTH_CONVERSION.map(({ value, multiplier, unit, id }) => (
                    <Button
                        key={id}
                        onClick={() => handleUnits(multiplier, unit, value)}
                        active={id === 1 && state.active}
                    >
                        {t(`calculator.length_conversion.${value}`)}{' '}
                        <FontAwesomeIcon icon={faArrowRight} /> {unit}
                    </Button>
                ))}
            </div>

            <div className="calculator-box-result">
                <h3 className="calculator-result">
                    {t('calculator.result')} {state.result}
                </h3>
                <Button
                    onClick={() => handleSavingNotes('lengthNotes')}
                    disabled={!state.input && !state.unit && !state.result}
                >
                    {t('calculator.save')}
                </Button>
            </div>
            <div className={state.open ? 'calculator-notes-box' : 'no-visible'}>
                <h2> {t('calculator.notes')}</h2>
                {state.notes.length > 0 ? (
                    <ul>
                        {state.notes.map((note, index) => (
                            <li key={index}>{note}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{t('calculator.no_notes')}</p>
                )}
                <Button
                    variant="delete"
                    onClick={() => handleDeletingNotes('lengthNotes')}
                >
                    {t('calculator.delete')}
                </Button>
            </div>
        </div>
    );
}

export default LengthConversion;
