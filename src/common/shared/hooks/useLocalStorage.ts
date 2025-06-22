// import { useState, useEffect } from 'react';
//
// export function useLocalStorage<T>(key: string, defaultValue: T) {
//   const [value, setValue] = useState<T>(() => {
//     const stored = localStorage.getItem(key);
//     return stored ? JSON.parse(stored) : defaultValue;
//   });
//
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);
//
//   return [value, setValue] as const;
// }

import { useState } from 'react';

export function useLocalStorage<V>(key: string, initialValue: V): [V, (v: V) => void] {
  const localValue = () => {
    try {
      return JSON.parse(localStorage.getItem(key) ?? '') as V;
    } catch {
      return initialValue;
    }
  };

  const [value, setNewValue] = useState(localValue);

  const setValue = (newValue: V) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setNewValue(newValue);
  };

  return [value, setValue];
}
