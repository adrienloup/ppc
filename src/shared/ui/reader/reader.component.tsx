import { type MouseEvent, useRef } from 'react';
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
  sound,
}: ReaderType) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
    onClick(e);
  };

  return (
    <ButtonComponent
      className={classNames(styles.button, className)}
      disabled={disabled}
      onClick={handleClick}
      innerRef={innerRef}
    >
      {children}
      <audio
        className={styles.reader}
        ref={audioRef}
        src={sound}
        preload="auto"
      />
    </ButtonComponent>
  );
};
