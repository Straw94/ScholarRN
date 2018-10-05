import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga'

import ScreenIndexReducer from './Reducers/ScreenIndexReducer';
import LoginReducer from './Reducers/LoginReducer';

// 异步
import rootSaga from './Saga/index'


const reducers = combineReducers({
    LoginReducer,
    ScreenIndexReducer
})


export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);
    return store
}
