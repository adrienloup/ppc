import { type Dispatch, type Reducer, useEffect, useReducer, useRef } from 'react';

export function useInitializer<T, A>(reducer: Reducer<T, A>, initialState: T, key: string): [T, Dispatch<A>] {
  const initializer = (): T => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialState;
    } catch {
      return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, null as unknown as T, initializer);

  const initial = useRef(true);

  useEffect(() => {
    if (!initial.current) {
      const stored = localStorage.getItem(key);
      const state = stored ? JSON.parse(stored) : initialState;
      dispatch({ type: 'INITIALIZE', state } as A); // requires the reducer to handle this action
    }
    initial.current = false;
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}
