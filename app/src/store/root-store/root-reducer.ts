import { combineReducers } from 'redux';

import { counterReducer } from '~/store/models/counter';

export default combineReducers({
  counter: counterReducer,
});
