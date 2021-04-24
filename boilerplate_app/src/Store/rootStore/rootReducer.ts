import { combineReducers } from 'redux';

import { counterReducer } from '~/Store/features/counter';

export default combineReducers({
  counter: counterReducer,
});
