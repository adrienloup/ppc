import { type MouseEvent } from 'react';
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
  const audio = new Audio(src);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
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
