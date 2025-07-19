import { type DependencyList, useEffect, useRef } from 'react';

export function useNotFirstRender(callback: () => void, deps: DependencyList) {
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    callback();
  }, deps);
}
