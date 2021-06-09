import { call, take, put, fork, all } from "@redux-saga/core/effects";
import { populateEntries, populateEntriesDetail, types } from "../actions/entries.actions";
import { BASE_URL } from '../shared/baseURL'
import axios from 'axios';



export function* getAllEntries() {
    yield take(types.GET_ENTRIES); // Waits until this action is triggered
    console.log('I need to get entries now');
    const res = yield call(axios.get, `${BASE_URL}/entries`);
    yield put(populateEntries(res.data))
}

function* getEntryDetail(id) {
    const res = yield call(axios.get, `${BASE_URL}/values/${id}`);
    console.log('CALL', res.data);
    yield put(populateEntriesDetail(res.data.id, res.data));

}

export function* getAllEntriesDetails() {
    const { payload } = yield take(types.POPULATE_ENTRIES);
    console.log(payload);
    yield all(payload.map(entry => fork(getEntryDetail, entry.id)))

}