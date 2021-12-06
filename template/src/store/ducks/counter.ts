// Types

export interface CounterState {
  value: number;
}

export interface CounterAction extends CounterState {
  type: CounterActionTypes;
}

export const initialCounterState: CounterState = {
  value: 0,
};

export enum CounterActionTypes {
  SET_VALUE = 'counter/set-value',
}

// Action creators

export function setValue(value: number): CounterAction {
  return {
    ...initialCounterState,
    type: CounterActionTypes.SET_VALUE,
    value,
  };
}

// Reducer

export const counterReducer = (
  state: CounterState = initialCounterState,
  action: CounterAction,
): Omit<CounterAction, 'type'> => {
  switch (action.type) {
    case CounterActionTypes.SET_VALUE:
      return { ...state, value: action.value };
    default:
      return state;
  }
};
