// Add the type of your reducer here when adding a new reducer to you project
interface RootState {
  counter: CounterState;
}

//States of the counter reducer
interface CounterState {
  value: number;
}

type CounterAction = {
  type: string;
  payload: CounterState;
};

type DispatchType = (args: CounterAction) => CounterAction;
