export const increment = (value: CounterState) => ({
  type: 'INCREMENT',
  payload: value,
});

export const decrement = (value: CounterState) => ({
  type: 'DECREMENT',
  payload: value,
});
