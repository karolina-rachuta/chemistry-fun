import { useReducer } from 'react';
import {
    getNotes,
    saveNotes,
    deleteNotes,
} from '../../helpers/calculatorHelper';

type State = {
    input: number;
    result: string;
    active: boolean;
    notes: string[];
    open: boolean;
    unit: string;
};

type Action =
    | { type: 'SET_INPUT'; payload: number }
    | { type: 'SET_RESULT'; payload: string }
    | { type: 'SET_ACTIVE'; payload: boolean }
    | { type: 'SET_NOTES'; payload: string[] }
    | { type: 'TOOGLE_NOTES'; payload: boolean }
    | { type: 'CLICKED_UNIT'; payload: string };

export const initialState: State = {
    input: 0,
    result: '',
    active: false,
    notes: [],
    open: false,
    unit: '',
};

export const reducer = (state: State, action: Action) => {
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
            };
        case 'CLICKED_UNIT':
            return {
                ...state,
                unit: action.payload,
            };

        default:
            return state;
    }
};

function useContextVolume() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleNotes(notesName: string) {
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

    function handleUnits(multiplier: number, unit: string, value: string) {
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

    function handleUnitsEnter(
        defaultValue: number,
        defaultUnit: string,
        defaultUnit2: string
    ) {
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

    function handleSavingNotes(notesName: string) {
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

    function handleDeletingNotes(notesName: string) {
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
    };
}

export default useContextVolume;
