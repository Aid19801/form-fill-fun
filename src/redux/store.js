import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from './reducers';
import * as sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    RootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ),
)


function* rootSaga() {
    yield all([
        sagas.watcherLoadAddresses(),
    ])
}

sagaMiddleware.run(rootSaga);

export default store;
