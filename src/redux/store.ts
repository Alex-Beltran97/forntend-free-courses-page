import { createStore, combineReducers } from 'redux';
import logginReducer from './reducers/logginReducer';

const allReducers = combineReducers({
  logginReducer
});

export const store = createStore( logginReducer );
