import { combineReducers } from 'redux';

import { counterReducer } from '~/store/models/counter';

export const reducers = combineReducers({
  counter: counterReducer,
});
