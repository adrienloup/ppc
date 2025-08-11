import { type FC, useEffect, useRef, useState } from 'react';
import { PopinContext, PopinActionContext } from '@/src/domains/popin/infrastructure/popin.context.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const PopinProvider: FC<{ children: Children }> = ({ children }) => {
  const timerRef = useRef<number | null>(null);
  const actionRef = useRef<() => void>(() => {});
  const [remove, setRemove] = useState(false);

  const clearTimer = () => {
    if (timerRef.current === null) return;
    clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const onPopin = (fn: () => void) => {
    actionRef.current = fn;
  };

  const onRemove = () => {
    setRemove(true);
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      actionRef.current();
      setRemove(false);
    }, 400); // CSS animation duration
  };

  useEffect(() => clearTimer, []);

  return (
    <PopinContext.Provider value={[remove, onRemove]}>
      <PopinActionContext.Provider value={onPopin}>{children}</PopinActionContext.Provider>
    </PopinContext.Provider>
  );
};
