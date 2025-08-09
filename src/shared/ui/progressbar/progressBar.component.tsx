import { classNames } from '@/src/shared/utils/classNames.ts';
import type { ProgressBar } from '@/src/shared/ui/progressbar/progressBar.type.ts';
import styles from '@/src/shared/ui/progressbar/progressBar.module.scss';

export const ProgressBarComponent = ({
  className,
  valueNow,
  valueMin = 0,
  valueMax = 100,
  size = 'medium',
}: ProgressBar) => {
  const getStyle = (valueNow: number) => ({ width: `${(valueNow * 100) / valueMax}%` });

  return (
    <div
      className={classNames(styles.progressBar, styles[size], className)}
      role="progressbar"
      aria-valuenow={valueNow}
      aria-valuemin={valueMin}
      aria-valuemax={valueMax}
    >
      <div
        className={styles.progress}
        style={getStyle(valueNow)}
      ></div>
    </div>
  );
};
