import { type DependencyList, useEffect, useRef } from 'react';

export function useFirstRender(callback: () => void, deps: DependencyList) {
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    callback();
  }, deps);
}
