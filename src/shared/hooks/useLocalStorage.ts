import { useCallback } from 'react';

export function useLocalStorage<T>(key: string, value: T) {
  const get = useCallback((): T => {
    try {
      return JSON.parse(localStorage.getItem(key) ?? '') as T;
    } catch {
      return value;
    }
  }, [key, value]);

  const set = useCallback(
    (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  const remove = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  return { get, set, remove };
}
