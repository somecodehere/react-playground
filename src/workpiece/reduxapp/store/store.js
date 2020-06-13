import { applyMiddleware, createStore, compose } from 'redux';

import reducers from './reducers';

let reduxMiddlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...reduxMiddlewares)));

export default store;
