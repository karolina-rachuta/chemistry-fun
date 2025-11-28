import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { VOLUME_CONVERSION } from './constants';
import useContextVolume from './hooks/useContextVolume';
import { useTranslation } from 'react-i18next';

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
    } = useContextVolume();

    useEffect(() => handleNotes('volumeNotes'), []);

    return (
        <div className="calculator-container">
            <h2>{t('calculator.volume_conversion.hdl')}</h2>
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
                            handleUnitsEnter(4.93, 'ml', 'teaspoon');
                    }}
                />
                {VOLUME_CONVERSION.map(({ value, multiplier, unit, id }) => (
                    <button
                        key={id}
                        onClick={() => handleUnits(multiplier, unit, value)}
                        className={
                            id === 1 && state.active ? 'btn active' : 'btn'
                        }
                    >
                        {t(`calculator.volume_conversion.${value}`)}{' '}
                        <FontAwesomeIcon icon={faArrowRight} />{' '}
                        {t(`calculator.volume_conversion.${unit}`)}
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
                    onClick={() => handleSavingNotes('volumeNotes')}
                    disabled={!state.input && !state.unit && !state.result}
                >
                    {t('calculator.save')}
                </button>
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
                    <p> {t('calculator.no_notes')}</p>
                )}
                <button
                    className="btn btn-delete"
                    onClick={() => handleDeletingNotes('volumeNotes')}
                >
                    {t('calculator.delete')}
                </button>
            </div>
        </div>
    );
}

export default WeightConversion;
