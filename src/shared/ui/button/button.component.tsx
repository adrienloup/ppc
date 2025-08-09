import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Button } from '@/src/shared/ui/button/button.type.ts';
import styles from '@/src/shared/ui/button/button.module.scss';

export const ButtonComponent = memo(
  ({
    children,
    className,
    href,
    to,
    disabled,
    innerRef,
    onClick,
    ...props
  }: Button<HTMLButtonElement & HTMLAnchorElement>) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
      if (disabled) {
        setActive(false);
      }
    }, [disabled]);

    const onKeyDown = (e: { key: string }) => {
      if (e.key === 'Enter' || e.key === ' ') {
        setActive(true);
      }
    };

    const onKeyUp = (e: { key: string }) => {
      if (e.key === 'Enter' || e.key === ' ') {
        setActive(false);
      }
    };

    const link = (
      <Link
        to={to!}
        className={classNames(styles.button, className)}
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
        className={classNames(styles.button, className)}
        {...props}
      >
        {children}
      </a>
    );

    const button = (
      <button
        type="button"
        ref={innerRef}
        aria-pressed={active}
        disabled={disabled}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onClick={onClick}
        className={classNames(styles.button, className, active ? styles.active : '')}
        {...props}
      >
        {children}
      </button>
    );

    return href ? a : to ? link : button;
  }
);
