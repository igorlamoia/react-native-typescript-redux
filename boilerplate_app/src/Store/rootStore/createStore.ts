import { createStore, applyMiddleware, Store, compose } from 'redux';
import thunk from 'redux-thunk';

import { ReactotronInstance as Reactotron } from '~/services/reactotron';
import rootReducer from './rootReducer';

const enhancer = __DEV__
  ? compose(Reactotron.createEnhancer(), applyMiddleware(thunk))
  : applyMiddleware(thunk);

export const store: Store = createStore(rootReducer, enhancer);
