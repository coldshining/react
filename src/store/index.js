import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import thunk from 'redux-thunk';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
  const enhancer = composeEnhancers(
  applyMiddleware(thunk, sagaMiddleware),
  );
 const store = createStore(reducer, enhancer);
 sagaMiddleware.run(mySaga)
export default store;