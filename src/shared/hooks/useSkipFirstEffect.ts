import { type DependencyList, useEffect, useRef } from 'react';

export function useSkipFirstEffect(effect: () => void | (() => void), deps: DependencyList) {
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    return effect();
  }, deps);
}
