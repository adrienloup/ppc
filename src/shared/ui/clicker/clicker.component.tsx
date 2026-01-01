import { type CSSProperties, type MouseEvent, useEffect, useRef, useState } from 'react';
import clicker from '@/src/assets/sounds/clicker.mp3';
import { ReaderComponent } from '@/src/shared/ui/reader/reader.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { ClickerType } from '@/src/shared/ui/clicker/clicker.type.ts';
import styles from '@/src/shared/ui/clicker/clicker.module.scss';

export interface Value {
  id: number;
  x: number;
  y: number;
}

export const ClickerComponent = ({ children, className, disabled, onClick, value }: ClickerType) => {
  const [values, setValues] = useState<Value[]>([]);
  const timeoutsRef = useRef<number[]>([]);

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

    timeoutsRef.current.push(timeoutId);
    onClick(e);
  };

  const getStyle = (x: number, y: number) => ({ left: x, top: y }) as CSSProperties;

  useEffect(() => {
    return () => timeoutsRef.current.forEach((id) => clearTimeout(id));
  }, []);

  return (
    <ReaderComponent
      className={classNames(styles.button, className, disabled ? styles.disabled : '')}
      disabled={disabled}
      onClick={handleClick}
      sound={clicker}
    >
      <span className={styles.inner}>{children}</span>
      {values.map((v) => (
        <span
          key={v.id}
          className={styles.value}
          style={getStyle(v.x, v.y)}
        >
          {value}
        </span>
      ))}
    </ReaderComponent>
  );
};
