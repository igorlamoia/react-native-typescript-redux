import { combineReducers } from 'redux';

import { counterReducer } from '~/store/features/counter';

export default combineReducers({
  counter: counterReducer,
});
