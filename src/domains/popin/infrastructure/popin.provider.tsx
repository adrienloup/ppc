import { type FC, useEffect, useRef, useState } from 'react';
import { PopinContext, PopinDisContext } from '@/src/domains/popin/infrastructure/popin.context.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const PopinProvider: FC<{ children: Children }> = ({ children }) => {
  const timerRef = useRef<number | null>(null);
  const dispatchRef = useRef<() => void>(() => {});
  const [remove, setRemove] = useState(false);

  const clearTimer = () => {
    if (timerRef.current === null) return;
    clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const dispatch = (fn: () => void) => {
    dispatchRef.current = fn;
  };

  const onRemove = () => {
    setRemove(true);
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      dispatchRef.current();
      setRemove(false);
    }, 400); // CSS animation duration
  };

  useEffect(() => clearTimer, []);

  return (
    <PopinContext.Provider value={[remove, onRemove]}>
      <PopinDisContext.Provider value={dispatch}>{children}</PopinDisContext.Provider>
    </PopinContext.Provider>
  );
};
