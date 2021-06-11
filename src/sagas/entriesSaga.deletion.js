import { call, put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { types } from "../actions/entries.actions";
import { BASE_URL } from "../shared/baseURL";

//Worker
function* deleteEntry({ payload: id }) {
    yield call(axios.delete, `${BASE_URL}/entries/${id}`)
    yield call(axios.delete, `${BASE_URL}/values/${id}`)
    yield put({ type: types.REMOVE_ENTRY, payload: id })
}

//Watcher
export function* watcherDeleteEntrySaga() {
    yield takeLatest(types.REMOVE_ENTRY_SAGA, deleteEntry)
}