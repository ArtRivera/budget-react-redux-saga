import { all, fork } from '@redux-saga/core/effects'
import * as entriesSaga from './entriesSaga'
import * as TestSagas from './sagas';

export default function* rootSaga() {
    yield all([
        ...Object.values(entriesSaga),
        // ...Object.values(TestSagas)
    ].map(fork))
}

// export default function* rootSaga() {
//     yield fork(testSaga)
//     yield fork(count)
// }