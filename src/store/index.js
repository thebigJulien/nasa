import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import picturesReducer from '../reducers/index';

const store = createStore(picturesReducer, applyMiddleware(thunk));

export default store;