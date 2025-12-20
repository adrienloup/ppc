import { classNames } from '@/src/shared/utils/classNames.ts';
import type { ProgressBarType } from '@/src/shared/ui/progressbar/progressbar.type.ts';
import styles from '@/src/shared/ui/progressbar/progressbar.module.scss';

export const ProgressbarComponent = ({
  className,
  size = 'medium',
  valueNow,
  valueMin = 0,
  valueMax = 100,
  completed = false,
}: ProgressBarType) => {
  return (
    <div
      className={classNames(
        styles.progressbar,
        styles[size],
        completed ? styles.completed : '',
        className
      )}
      role="progressbar"
      aria-valuenow={valueNow}
      aria-valuemin={valueMin}
      aria-valuemax={valueMax}
    >
      <div
        className={classNames(styles.progress, completed ? styles.completed : '')}
        style={{ width: `${valueNow}%` }}
      ></div>
    </div>
  );
};
