import { take, delay, put, call, fork, takeEvery, cancelled, takeLatest } from 'redux-saga/effects'

function double(number) {
    return number * 2;
}

function* doNothing() {
    console.log('Ive being called');
    yield delay(1000);
    console.log('Im doing nothing');
}

export function* testSaga() {

    while (true) {
        console.log('Start Saga');
        const state = yield take('TEST_MESSAGE');
        const a = yield call(double, 2);
        console.log(a);
        const b = yield double(3);
        console.log(b);
        console.log('Finish Saga', state);
    }
}



export function* testSagaFork() {
    while (true) {
        yield take('TEST_MESSAGE_2')
        yield fork(doNothing)
        yield fork(doNothing)
        yield fork(doNothing)
    }
}

function* testSageTakeEveryProcess({ payload }) {
    yield console.log('Starting Process for', payload);
    yield delay(3000);
    yield console.log('Ending Process for', payload);
}

export function* testSagaTakeEvery() {
    yield takeEvery('TEST_MESSAGE_3', testSageTakeEveryProcess);
    console.log('Finished TakeEvery for index');
}

function* infinitySaga() {
    console.log('Starting Infinite Saga');
    let idx = 0;
    while (true) {
        idx++;
        try {
            console.log('Inside infinite loop index:', idx);
            yield delay(1000)
        } catch (error) {
            console.log(error);
        } finally {
            console.log('The fork was cancelled?', yield cancelled());
        }
    }
}

// export function* testSagaCancelled() {
//     yield take('TEST_MESSAGE_4')
//     const handleCancel = yield fork(infinitySaga);
//     yield delay(3000);
//     yield cancel(handleCancel);
// }

export function* testSagaTakeLatest() {
    yield takeLatest('TEST_MESSAGE_4', infinitySaga)
}


export function* dispatchTest() {
    while (true) {
        yield delay(5000);
        yield put({
            type: 'TEST_MESSAGE_4',
            payload: 1000
        })
    }

}