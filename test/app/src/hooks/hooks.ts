import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from '~/store';

/** Use this instead of `useSelector` */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/** Use this hook instead of `useDispatch` */
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
