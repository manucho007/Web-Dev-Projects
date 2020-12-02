import counterReducer from './counter';
import loggedReducer from './isLogged';
// Import the combiner
import { combineReducers } from 'redux';

// constant that holds all the reducers
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
