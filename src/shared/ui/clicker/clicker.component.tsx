import { type CSSProperties, type MouseEvent, useEffect, useRef, useState } from 'react';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Clicker } from '@/src/shared/ui/clicker/clicker.type.ts';
import styles from '@/src/shared/ui/clicker/clicker.module.scss';

export interface Value {
  id: number;
  x: number;
  y: number;
}

export const ClickerComponent = ({ children, className, disabled, value, prefix, onClick, ...props }: Clicker) => {
  const [values, setValues] = useState<Value[]>([]);
  const timeouts = useRef<number[]>([]);

  useEffect(() => {
    return () => timeouts.current.forEach((id) => clearTimeout(id));
  }, []);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const safeX = rect.left;
    const safeY = rect.top;

    setValues((prev) => [
      ...prev,
      {
        id: Date.now(),
        x: safeX - rect.left,
        y: safeY - rect.top,
      },
    ]);

    const timeoutId = window.setTimeout(() => {
      setValues((prev) => prev.slice(1));
    }, 4e2);

    timeouts.current.push(timeoutId);

    onClick();
  };

  const getStyle = (x: number, y: number) => ({ left: x, top: y }) as CSSProperties;

  return (
    <ButtonComponent
      className={classNames(styles.button, className, disabled ? styles.disabled : '')}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      <span className={styles.inner}>{children}</span>
      {values.map((v) => (
        <span
          key={v.id}
          className={styles.value}
          style={getStyle(v.x, v.y)}
        >
          {prefix}
          <NumberComponent value={value} />
        </span>
      ))}
    </ButtonComponent>
  );
};
