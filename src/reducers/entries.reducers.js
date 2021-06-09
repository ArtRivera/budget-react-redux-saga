import { types } from "../actions/entries.actions";

const initialEntries = [];


export const entriesReducer = (state = initialEntries, action) => {
    switch (action.type) {
        case types.POPULATE_ENTRIES:
            return action.payload

        case types.ADD_ENTRY:
            const newEntries = state.concat(action.payload)
            return newEntries;

        case types.REMOVE_ENTRY:
            return state.filter(entry => entry.id !== action.payload);

        case types.POPULATE_ENTRY_DETAIL:
            const idx = state.findIndex(entry => entry.id === action.payload.id);
            const updated = [...state];
            updated[idx] = {...updated[idx], ...action.payload.entry };
            return updated;

        case types.UPDATE_ENTRY:
            const index = state.findIndex(entry => entry.id === action.payload.id);
            const updatedEntries = [...state];
            updatedEntries[index] = {...action.payload };
            return updatedEntries;

        default:
            return state;
    }
}