import { combineReducers } from 'redux';

import { counterReducer as counter } from '../ducks';

export const reducers = combineReducers({
  counter,
});
