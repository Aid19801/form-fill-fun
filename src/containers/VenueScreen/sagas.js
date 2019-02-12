import { takeLatest, put, call } from 'redux-saga/effects';
import * as actions from './constants';

export function* watcherLoadAddresses() {
    yield takeLatest(actions.LOADING_ADDRESSES, workerLoadAddresses);
}

export function* workerLoadAddresses(str) {
    console.log('search term is coming thru? ', str);
    let addresses = [];
    yield fetch('http://localhost:3001/addresses')
        .then(res => res.json())
        .then(json => {
            addresses = json;
        })
        .catch(err => console.log(err));
    
    addresses.length !== 0 ? yield put({ type: actions.LOADED_ADDRESSES, addresses })
    : yield put({ type: actions.ADDRESS_API_FAIL })
        
}