import { createStore, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';
import reducer from './reducer';

const composeEnchancers =
  (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  reducer,
  // composeEnchancers(applyMiddleware(logger))
);

export default store;
