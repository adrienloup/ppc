import { useCallback, useEffect, useRef, useState } from 'react';
import noticeSound from '@/src/assets/sounds/notice.mp3';
import { Button } from '@/src/shared/ui/button/Button.tsx';
import type { NoticeType } from '@/src/shared/ui/notice/Notice.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/notice/Notice.module.scss';

export const Notice = ({ text, status = 'info', timeout = 5e3, remove = () => {} }: NoticeType) => {
  const [out, setOut] = useState(false);
  const outTimerRef = useRef(0);
  const removeTimerRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onClick = useCallback(() => {
    setOut(true);

    outTimerRef.current = setTimeout(() => {
      remove();
    }, 5e2); // CSS animation duration
  }, [remove]);

  useEffect(() => {
    outTimerRef.current = setTimeout(() => {
      setOut(true);
    }, timeout);

    removeTimerRef.current = setTimeout(() => {
      remove();
    }, timeout + 5e2); // CSS animation duration

    audioRef.current = new Audio(noticeSound);

    const audio = audioRef.current;

    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});

    return () => {
      clearTimeout(outTimerRef.current);
      clearTimeout(removeTimerRef.current);
      audioRef.current = null;
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
        <Button
          className={styles.button}
          onClick={onClick}
        >
          x
        </Button>
      </div>
    </div>
  );
};
