import {applyMiddleware, createStore} from 'redux';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import videoDataReducer from './reducers/videoDataReducer';
const middleware = applyMiddleware(thunk, createLogger());

export default createStore(videoDataReducer, middleware);
