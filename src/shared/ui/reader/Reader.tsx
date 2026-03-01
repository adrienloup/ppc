import { type MouseEvent, useEffect, useRef } from 'react';
import { Button } from '@/src/shared/ui/button/Button.tsx';
import type { ReaderType } from '@/src/shared/ui/reader/Reader.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/reader/Reader.module.scss';

export const Reader = ({ children, className, disabled, innerRef, onClick, sound, ...props }: ReaderType) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(sound);
    return () => {
      audioRef.current = null;
    };
  }, []);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);

    const audio = audioRef.current;

    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  return (
    <Button
      className={classNames(styles.button, className)}
      disabled={disabled}
      innerRef={innerRef}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};
