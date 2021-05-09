/*
  Follow this pattern when adding a new reducer and action to your project
 */

declare type CounterAction = {
  type: 'INCREMENT' | 'DECREMENT' | '';
  payload?: CounterState;
};
