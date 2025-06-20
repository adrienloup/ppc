import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Progressbar } from '@/src/common/components/progressbar/Progressbar.ts';
import styles from '@/src/common/components/progressbar/progressbar.module.scss';

export const ProgressbarComponent = ({
  valueNow,
  valueMin = 0,
  valueMax = 100,
  size = 'medium',
  className,
}: Progressbar) => {
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
