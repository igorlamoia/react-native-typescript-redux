// Add the type of your reducer state here when adding a new reducer to you project
interface RootState {
  counter: CounterState;
}

type CounterDispatchType = (args: CounterAction) => CounterAction;
