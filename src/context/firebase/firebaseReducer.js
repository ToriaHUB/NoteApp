import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from "../types";

const handlers = {
    [SHOW_LOADER]: state => {
        return {...state, loading: true}
    },
    [ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: [...state.notes, payload]
    }),
    [FETCH_NOTES]: (state, {payload}) => {
        return {...state, notes: payload, loading: false}
    },
    [REMOVE_NOTE]: (state, {payload}) => ({
        ...state,
        notes: state.notes.filter(note => note.id !== payload)
    }),
    DEFAULT: state => {
        return state
    }

};

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
};