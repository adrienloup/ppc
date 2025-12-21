import { useEffect, useRef, useState } from 'react';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { NoticeType } from '@/src/domains/notice/ui/notice/notice.type.ts';
import styles from '@/src/domains/notice/ui/notice/notice.module.scss';

export const NoticeComponent = ({ text, status = 'info', timeout = 5e3, remove = () => {} }: NoticeType) => {
  const [out, setOut] = useState(false);
  const outTimer = useRef(0);
  const removeTimer = useRef(0);

  useEffect(() => {
    outTimer.current = setTimeout(() => {
      setOut(true);
    }, timeout);

    removeTimer.current = setTimeout(() => {
      remove();
    }, timeout + 5e2); // CSS animation duration
    return () => {
      clearTimeout(outTimer.current);
      clearTimeout(removeTimer.current);
    };
  }, []);

  return (
    <div
      className={classNames(styles.notice, styles[status], styles.in, out ? styles.out : '')}
      role="alert"
      aria-live="assertive"
    >
      <div className={styles.inner}>
        <div className={styles.text}>{text}</div>
        <ButtonComponent
          className={styles.button}
          onClick={remove}
        >
          x
        </ButtonComponent>
      </div>
    </div>
  );
};
