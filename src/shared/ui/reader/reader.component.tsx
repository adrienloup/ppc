import { type MouseEvent, useEffect, useRef } from 'react';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { ReaderType } from '@/src/shared/ui/reader/reader.type.ts';
import styles from '@/src/shared/ui/reader/reader.module.scss';

export const ReaderComponent = ({
  children,
  className,
  disabled,
  innerRef,
  onClick,
  src,
  ...props
}: ReaderType) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
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
    <ButtonComponent
      className={classNames(styles.button, className)}
      disabled={disabled}
      innerRef={innerRef}
      onClick={handleClick}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};
