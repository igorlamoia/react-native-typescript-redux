// Define the initial state using that type
const INITIAL_STATE: CounterState = {
  value: 0,
};

export const counterReducer = (
  state: CounterState = INITIAL_STATE,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        ...action.payload,
      };
    case 'DECREMENT':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
