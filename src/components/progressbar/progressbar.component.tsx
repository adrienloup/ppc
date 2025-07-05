import { classNames } from '@/src/shared/utils/classNames.ts';
import type { ProgressbarType } from '@/src/components/progressbar/progressbar.type.ts';
import styles from '@/src/components/progressbar/progressbar.module.scss';

export const ProgressbarComponent = ({
  className,
  valueNow,
  valueMin = 0,
  valueMax = 100,
  size = 'medium',
}: ProgressbarType) => {
  const getStyle = (valueNow: number) => ({ width: `${(valueNow * 100) / valueMax}%` });

  return (
    <div
      className={classNames([styles.progressbar, styles[size], className])}
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
