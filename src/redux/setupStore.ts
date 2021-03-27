// Libraries
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { SagaMiddleware } from 'redux-saga';
import logger from 'redux-logger';
// Sagas
import { usersSaga } from '../reducers/User/UserSaga';

// Reducers
import rootReducer from './rootReducer';
const configureStore = (initialState?: RootState) => {
  const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();
  const store = createStore<RootState, Action, {}, {}>(rootReducer, initialState, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(usersSaga);
  return store;
};

export default configureStore;