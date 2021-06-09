import { take, delay, put, call, fork } from 'redux-saga/effects'

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


export function* dispatchTest() {

    while (true) {
        yield delay(5000);
        yield put({
            type: 'TEST_MESSAGE_2'
        })
    }

}