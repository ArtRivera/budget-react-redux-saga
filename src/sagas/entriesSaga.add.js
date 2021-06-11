import { call, put, takeLatest } from '@redux-saga/core/effects';
import axios from 'axios';
import { types } from '../actions/entries.actions';
import { BASE_URL } from '../shared/baseURL';

//Worker
function* addEntry({ payload }) {
    try {
        yield console.log('ADD', payload);
        const { id, description, value, isExpense } = payload;
        yield call(axios.post, `${BASE_URL}/entries`, { id, description });
        yield call(axios.post, `${BASE_URL}/values`, { id, value, isExpense });
        yield put({ type: types.ADD_ENTRY, payload });
    } catch (error) {

    }
}

//Watcher
export function* watcherEntriesSagaAdd() {
    yield takeLatest(types.ADD_ENTRY_SAGA, addEntry)
}