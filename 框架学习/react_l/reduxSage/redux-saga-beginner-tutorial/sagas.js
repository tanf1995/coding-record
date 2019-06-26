import { delay } from 'redux-saga';
import  { put, takeEvery, all, call } from 'redux-saga/effects';

export function* hello(){
    console.log("hello saga!")
}

export function* incrementAsync(){
    yield call(delay, 1000)
    console.log("delay 1000");
    yield put({type: "INCREMENT"})
}

export function* watchIncrementAsync(){
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSage(){
    yield all([
        hello(),
        watchIncrementAsync()
    ])
    // yield hello();
    // yield watchIncrementAsync();
}