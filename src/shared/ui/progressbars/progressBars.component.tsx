import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { ProgressBars } from '@/src/shared/ui/progressbars/progressBars.type.ts';
import styles from '@/src/shared/ui/progressbars/progressBars.module.scss';

export const ProgressBarsComponent = ({ total, value1, value2, className }: ProgressBars) => {
  const clampedUsed = Math.min(value2, value1);
  const clampedUnlocked = Math.min(value1, total);
  const usedPercent = (clampedUsed / total) * 100;
  const unlockedPercent = ((clampedUnlocked - clampedUsed) / total) * 100;
  const lockedPercent = 100 - usedPercent - unlockedPercent;

  return (
    <div className={classNames(styles.progressBars, className)}>
      <div
        className={classNames(styles.stick, styles.used)}
        style={{ width: `${usedPercent}%` }}
      >
        <span className={styles.label}>used</span>
        <NumberComponent
          value={usedPercent / 100}
          asset="percent"
        />
      </div>
      <div
        className={classNames(styles.stick, styles.unlocked)}
        style={{ width: `${unlockedPercent}%` }}
      >
        <span className={styles.label}>unlocked</span>
        <NumberComponent
          value={unlockedPercent / 100}
          asset="percent"
        />
      </div>
      <div
        className={classNames(styles.stick, styles.locked)}
        style={{ width: `${lockedPercent}%` }}
      >
        <span className={styles.label}>locked</span>
        <NumberComponent
          value={lockedPercent / 100}
          asset="percent"
        />
      </div>
    </div>
  );
};
