import { createStore, applyMiddleware } from 'redux';
import { RootReducer } from './RootReducer';
import createSagaMiddleware from 'redux-saga';
import { watchUser } from './User_saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchUser);
export default store;
