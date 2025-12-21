import { useCallback, useEffect, useRef, useState } from 'react';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { AlertType } from '@/src/domains/notice/ui/alert/alert.type.ts';
import styles from '@/src/domains/notice/ui/alert/alert.module.scss';

export const AlertComponent = ({
  id,
  text,
  status = 'warning',
  timeout = 5e3,
  close = true,
  onRemove = () => {},
}: AlertType) => {
  const timerRef = useRef<number | null>(null);
  const [out, setOut] = useState(false);

  const startRemoveSequence = useCallback(() => {
    setOut(true);
    timerRef.current = window.setTimeout(() => {
      onRemove();
    }, timeout + 400); // CSS animation duration
  }, [onRemove, timeout, timerRef, setOut]);

  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      startRemoveSequence();
    }, timeout);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timeout, startRemoveSequence]);

  return (
    <div
      className={classNames(styles.alert, styles[status], styles.in, out ? styles.out : '')}
      id={id}
      role="alert"
      aria-live="assertive"
    >
      <div className={styles.inner}>
        <div className={styles.text}>{text}</div>
        {close && (
          <ButtonComponent
            className={styles.button}
            onClick={startRemoveSequence}
          >
            x
          </ButtonComponent>
        )}
      </div>
    </div>
  );
};
