import { useEffect, useRef, useState } from 'react';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { ButtonComponent } from '@/src/components/button/button.component.tsx';
// import { IconComponent } from '@/src/components/icon/IconComponent.tsx';
import type { Notif } from '@/src/features/notification/notif.type.ts';
import styles from '@/src/components/notif/notif.module.scss';

export const NotifComponent = ({ id, text, status = 'warning', timeout = 5e3, close = true, remove }: Notif) => {
  const outTimer = useRef(0);
  const removeTimer = useRef(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (timeout > 0) {
      // outTimer.current = setTimeout(() => {
      //   setOut(true);
      // }, timeout) as unknown as number;
      // removeTimer.current = setTimeout(() => {
      //   remove?.(); // removes the component after the exit CSS animation
      // }, timeout + 400) as unknown as number; // add CSS animation duration
    }
    return () => {
      clearTimeout(outTimer.current);
      clearTimeout(removeTimer.current);
    };
  }, [timeout]);

  return (
    <div
      className={classNames([styles.notif, styles[status], timeout > 0 ? styles.in : '', out ? styles.out : ''])}
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
            x{/*<IconComponent icon="cancel" />*/}
          </ButtonComponent>
        )}
      </div>
    </div>
  );
};
