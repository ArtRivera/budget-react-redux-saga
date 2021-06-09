//REDUX
import { createStore, combineReducers, applyMiddleware } from "redux";
//Reducers
import { entriesReducer } from '../reducers/entries.reducers';
import { modalReducer } from "../reducers/modal.reducer";
//Redux DevTools
import { composeWithDevTools } from 'redux-devtools-extension';
//REDUX-SAGA
import createSagaMiddleware from 'redux-saga';
import { count, testSaga } from "../sagas/sagas";
import rootSaga from "../sagas";
const sagaMiddleWare = createSagaMiddleware();

const middleWares = [sagaMiddleWare];

export const configureStore = () => {
    const combinedReducers = combineReducers({
        entries: entriesReducer,
        modal: modalReducer
    });
    const store = createStore(combinedReducers, composeWithDevTools(
        applyMiddleware(...middleWares)
    ));
    sagaMiddleWare.run(rootSaga);
    return store;
};