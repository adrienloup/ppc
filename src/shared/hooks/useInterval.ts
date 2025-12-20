import { useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, delay: number, enabled: boolean = true) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled) return;

    const interval = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(interval);
  }, [delay, enabled]);
};
