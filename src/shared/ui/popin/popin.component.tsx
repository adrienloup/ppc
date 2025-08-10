import { useEffect, useRef, useState } from 'react';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Popin } from '@/src/shared/ui/popin/popin.type.ts';
import styles from '@/src/shared/ui/popin/popin.module.scss';

export const PopinComponent = ({ children, onRemove = () => {} }: Popin) => {
  const timerRef = useRef<number | null>(null);
  const [remove, setRemove] = useState(false);

  const clearTimer = () => {
    if (timerRef.current === null) return;
    clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const onClick = () => {
    setRemove(true);
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      onRemove();
    }, 400); // CSS animation duration
  };

  useEffect(() => clearTimer, []);

  return (
    <div className={styles.popin}>
      <div className={classNames(styles.content, remove ? styles.remove : '')}>
        <div className={styles.inner}>{children}</div>
      </div>
      <div
        className={styles.backdrop}
        role="presentation"
        onClick={onClick}
      ></div>
    </div>
  );
};
