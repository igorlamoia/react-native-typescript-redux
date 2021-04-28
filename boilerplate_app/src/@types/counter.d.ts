/*
  Follow this pattern when adding a new reducer and action to your project
 */

// States of the counter reducer
interface CounterState {
  value: number;
}

type CounterAction = {
  type: string;
  payload: CounterState;
};
