import { all, fork } from '@redux-saga/core/effects'
import * as entriesSaga from './entriesSaga';
import * as deletionSaga from './entriesSaga.deletion';
import * as addSaga from './entriesSaga.add';
// import * as TestSagas from './sagas';

export default function* rootSaga() {
    yield all([
        ...Object.values(entriesSaga),
        ...Object.values(deletionSaga),
        ...Object.values(addSaga)
        // ...Object.values(TestSagas)
    ].map(fork))
}

// export default function* rootSaga() {
//     yield fork(testSaga)
//     yield fork(count)
// }