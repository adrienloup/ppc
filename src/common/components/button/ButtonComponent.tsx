import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Button } from '@/src/common/components/button/Button.ts';
import styles from '@/src/common/components/button/Button.module.scss';

export const ButtonComponent = ({
  children,
  className,
  href,
  to,
  disabled,
  innerRef,
  onClick,
  triggerClick,
  ...props
}: Button<HTMLButtonElement & HTMLAnchorElement>) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (disabled) {
      setIsActive(false);
    }
  }, [disabled]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsActive(true);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsActive(false);
    }
  };

  const link = (
    <Link
      to={to!}
      className={classNames([styles.button, className])}
      onClick={triggerClick}
      {...props}
    >
      {children}
    </Link>
  );

  const a = (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={classNames([styles.button, className])}
      {...props}
    >
      {children}
    </a>
  );

  const button = (
    <button
      type="button"
      ref={innerRef}
      aria-pressed={isActive}
      disabled={disabled}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onClick={onClick}
      className={classNames([styles.button, isActive ? styles.active : '', className])}
      {...props}
    >
      {children}
    </button>
  );

  return href ? a : to ? link : button;
};
