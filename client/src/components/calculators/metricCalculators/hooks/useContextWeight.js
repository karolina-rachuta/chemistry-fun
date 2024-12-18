import React, {
    useReducer
} from 'react';
import {
    getNotes,
    saveNotes,
    deleteNotes,
} from '../../helpers/calculatorHelper';


export const initialState = {
    input: 0,
    result: '',
    active: false,
    notes: [],
    open: false,
    unit: '',
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_INPUT':
            return {
                ...state,
                input: action.payload,
            };
        case 'SET_RESULT':
            return {
                ...state,
                result: action.payload,
            };
        case 'SET_ACTIVE':
            return {
                ...state,
                active: action.payload,
            };
        case 'SET_NOTES':
            return {
                ...state,
                notes: action.payload,
            };
        case 'TOOGLE_NOTES':
            return {
                ...state,
                open: action.payload,
            }
            case 'CLICKED_UNIT':
                return {
                    ...state,
                    unit: action.payload,
                };

            default:
                return state;
    }
};

function useContextWeight() {

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleNotes(notesName) {
        const storedNotes = getNotes(notesName) || [];
        dispatch({
            type: 'SET_NOTES',
            payload: storedNotes,
        });

        dispatch({
            type: 'TOOGLE_NOTES',
            payload: storedNotes.length > 0,
        });

    }

    function handleUnits(multiplier, unit, value) {
        const result = `${(state.input * multiplier).toFixed(2)} ${unit}`;
        dispatch({
            type: 'SET_RESULT',
            payload: result,
        });
        dispatch({
            type: 'SET_ACTIVE',
            payload: false,
        });
        dispatch({
            type: 'CLICKED_UNIT',
            payload: value,
        });
    }

    function handleUnitsEnter(defaultValue, defaultUnit, defaultUnit2) {
        const result = `${(state.input * defaultValue).toFixed(
            2
        )} ${defaultUnit}`;
        dispatch({
            type: 'SET_RESULT',
            payload: result,
        });
        dispatch({
            type: 'SET_ACTIVE',
            payload: true,
        });
        dispatch({
            type: 'CLICKED_UNIT',
            payload: defaultUnit2,
        });
    }

    function handleSavingNotes(notesName) {
        const newNote = `${state.input} ${state.unit} => ${state.result}`;
        const updatedNotes = [...state.notes, newNote];
        dispatch({
            type: 'SET_NOTES',
            payload: updatedNotes,
        });
        saveNotes(notesName, updatedNotes);
        dispatch({
            type: 'TOOGLE_NOTES',
            payload: true,
        });
    }

    function handleDeletingNotes(notesName) {
        dispatch({
            type: 'SET_NOTES',
            payload: [],
        });
        deleteNotes(notesName);
        dispatch({
            type: 'TOOGLE_NOTES',
            payload: false,
        });
    }

    return {
        state,
        dispatch,
        handleNotes,
        handleUnits,
        handleUnitsEnter,
        handleSavingNotes,
        handleDeletingNotes,
    }
}

export default useContextWeight;