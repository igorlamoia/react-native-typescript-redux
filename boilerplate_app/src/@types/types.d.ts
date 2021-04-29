type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];

// Add the type of your reducer state here when adding a new reducer to you project
interface RootState {
  counter: CounterState;
}

type CounterDispatchType = (args: CounterAction) => CounterAction;
