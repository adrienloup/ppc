import { useEffect, useRef, useState } from 'react';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import type { Alert } from '@/src/features/notification/domain/Alert.ts';
import styles from '@/src/features/notification/components/alert/AlertComponent.module.scss';

export const AlertComponent = ({ id, text, status = 'warning', timeout = 2e3, close = true, remove }: Alert) => {
  const outTimer = useRef(0);
  const removeTimer = useRef(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (timeout > 0) {
      outTimer.current = setTimeout(() => {
        setOut(true);
      }, timeout) as unknown as number;
      removeTimer.current = setTimeout(() => {
        remove?.(); // removes the component after the exit CSS animation
      }, timeout + 400) as unknown as number; // add CSS animation duration
    }
    return () => {
      clearTimeout(outTimer.current);
      clearTimeout(removeTimer.current);
    };
  }, [timeout]);

  return (
    <div
      className={classNames([styles.alert, styles[status], timeout > 0 ? styles.in : '', out ? styles.out : ''])}
      id={id}
      role="alert"
      aria-live="assertive"
    >
      <div className={styles.inner}>
        <div className={styles.text}>{text}</div>
        {close && (
          <ButtonComponent
            className={styles.button}
            onClick={remove}
          >
            x
          </ButtonComponent>
        )}
      </div>
    </div>
  );
};
