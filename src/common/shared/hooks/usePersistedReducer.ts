import { useEffect, useReducer, type Reducer, type Dispatch } from 'react';

export function usePersistedReducer<S, A>(key: string, reducer: Reducer<S, A>, initialState: S): [S, Dispatch<A>] {
  const localStorageValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  const parsedState: S = localStorageValue ? JSON.parse(localStorageValue) : initialState;
  const [state, dispatch] = useReducer(reducer, parsedState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}
