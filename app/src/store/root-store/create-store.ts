/* eslint-disable @typescript-eslint/ban-ts-comment */
// type error Only

import { createStore, applyMiddleware, Store, compose } from 'redux';
import thunk from 'redux-thunk';

import { ReactotronInstance as Reactotron } from '~/config/reactotron';
import { reducers } from './root-reducer';

const enhancer = __DEV__
  ? // @ts-ignore ignore type checks for createEnhancer as it doesnt exists
    compose(Reactotron.createEnhancer(), applyMiddleware(thunk))
  : applyMiddleware(thunk);

// @ts-ignore same as above
export const store: Store = createStore(reducers, enhancer);
