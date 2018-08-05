import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import firebase from 'firebase/app';

import rootReducer from '../reducers/index.mjs'
import { firebaseConfig } from '../.firebase.config.mjs'
import watcherSaga from '../sagas/index.mjs'
import createSagaMiddleware from 'redux-saga'

export const history = createHistory()
const initialState = {}
const enhancers = []
const sagaMiddleware = createSagaMiddleware()

const middleware = [
  routerMiddleware(history),
  sagaMiddleware
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

sagaMiddleware.run(watcherSaga)

export default store;
