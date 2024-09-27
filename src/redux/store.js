import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { postReducer } from './reducer';

export const store = createStore(postReducer, applyMiddleware(thunk));
