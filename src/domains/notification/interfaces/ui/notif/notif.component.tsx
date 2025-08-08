import { useEffect, useRef, useState } from 'react';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import type { Notif } from '@/src/domains/notification/interfaces/ui/notif/notif.type.ts';
import styles from '@/src/domains/notification/interfaces/ui/notif/notif.module.scss';

export const NotifComponent = ({ id, text, status = 'warning', timeout = 4e3, close = true, remove }: Notif) => {
  const outTimer = useRef(0);
  const removeTimer = useRef(0);
  const [out, setOut] = useState(false);

  const onRemove = () => {
    setOut(true);
    removeTimer.current = setTimeout(() => {
      remove!();
    }, timeout + 400) as unknown as number;
  };

  useEffect(() => {
    if (timeout > 0) {
      outTimer.current = setTimeout(() => {
        setOut(true);
      }, timeout) as unknown as number;
      removeTimer.current = setTimeout(() => {
        remove!(); // removes the exit CSS animation
      }, timeout + 400) as unknown as number; // add CSS animation duration
    }
    return () => {
      clearTimeout(outTimer.current);
      clearTimeout(removeTimer.current);
    };
  }, [timeout]);

  return (
    <div
      className={classNames(styles.notif, styles[status], timeout > 0 ? styles.in : '', out ? styles.out : '')}
      id={id}
      role="alert"
      aria-live="assertive"
    >
      <div className={styles.inner}>
        <div className={styles.text}>{text}</div>
        {close && (
          <ButtonComponent
            className={styles.button}
            onClick={onRemove}
          >
            x
          </ButtonComponent>
        )}
      </div>
    </div>
  );
};
