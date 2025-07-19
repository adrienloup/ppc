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

// import { useCallback } from 'react';
//
// export function useLocalStorage<T>(key: string) {
//   const get = useCallback((): T | null => {
//     const stored = localStorage.getItem(key);
//     try {
//       return stored ? (JSON.parse(stored) as T) : null;
//     } catch {
//       console.warn(`[useLocalStorage] Failed to parse key "${key}"`);
//       return null;
//     }
//   }, [key]);
//
//   const set = useCallback(
//     (value: T) => {
//       localStorage.setItem(key, JSON.stringify(value));
//     },
//     [key]
//   );
//
//   const remove = useCallback(() => {
//     localStorage.removeItem(key);
//   }, [key]);
//
//   return { get, set, remove };
// }

// import { useState } from 'react';
//
// export function useLocalStorage<V>(key: string, initialValue: V): [V, (v: V) => void] {
//   const localValue = () => {
//     try {
//       return JSON.parse(localStorage.getItem(key) ?? '') as V;
//     } catch {
//       return initialValue;
//     }
//   };
//
//   const [value, setNewValue] = useState(localValue);
//
//   const setValue = (newValue: V) => {
//     localStorage.setItem(key, JSON.stringify(newValue));
//     setNewValue(newValue);
//   };
//
//   return [value, setValue];
// }
