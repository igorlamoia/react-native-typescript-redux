import { TypedUseSelectorHook, useSelector } from 'react-redux';

// Use this instead of `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
