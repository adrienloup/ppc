import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Rangebar } from '@/src/shared/ui/rangebar/rangebar.ts';
import styles from '@/src/shared/ui/rangebar/rangebar.module.scss';

export const RangebarComponent = ({ className, min, max, step, value, disabled, onChange }: Rangebar) => {
  return (
    <input
      className={classNames(styles.rangebar, className)}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
