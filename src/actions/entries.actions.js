export const types = {
    ADD_ENTRY: 'ADD_ENTRY',
    ADD_ENTRY_SAGA: 'ADD_ENTRY_SAGA',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES',
    POPULATE_ENTRY_DETAIL: 'POPULATE_ENTRY_DETAIL',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    REMOVE_ENTRY_SAGA: 'REMOVE_ENTRY_SAGA',
    UPDATE_ENTRY: 'UPDATE_ENTRY',
    GET_ENTRIES: 'GET_ENTRIES'
}

export const addEntryRedux = payload => ({ type: types.ADD_ENTRY_SAGA, payload });
export const removeEntryRedux = id => ({ type: types.REMOVE_ENTRY_SAGA, payload: id });
export const updateEntryRedux = entry => ({ type: types.UPDATE_ENTRY, payload: entry });
export const getAllEntries = () => ({ type: types.GET_ENTRIES });
export const populateEntries = entries => ({ type: types.POPULATE_ENTRIES, payload: entries });
export const populateEntriesDetail = (id, entry) => ({ type: types.POPULATE_ENTRY_DETAIL, payload: { id, entry } })