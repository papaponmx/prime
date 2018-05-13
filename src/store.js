import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import * as firebase from 'firebase';

import firebaseConfig from './settings/firebase';
import watcherSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import { getFirebase } from 'react-redux-firebase';

export const history = createHistory();
const initialState = {};

const enhancers = [];

const sagaMiddleware = createSagaMiddleware()

const middleware = [
  routerMiddleware(history),
  sagaMiddleware,
];


if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

firebase.initializeApp(firebaseConfig);
sagaMiddleware.run(watcherSaga, getFirebase);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();


export default store;
