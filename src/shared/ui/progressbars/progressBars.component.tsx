import type { ProgressBars } from '@/src/shared/ui/progressbars/progressBars.type.ts';
import styles from '@/src/shared/ui/progressbars/progressBars.module.scss';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';

export const ProgressBarsComponent = ({ total, value1 = 0, value2 = 0, className }: ProgressBars) => {
  const clampedUsed = Math.min(value2, value1);
  const clampedUnlocked = Math.min(value1, total);

  const usedPercent = (clampedUsed / total) * 100;
  const unlockedPercent = ((clampedUnlocked - clampedUsed) / total) * 100;
  const lockedPercent = 100 - usedPercent - unlockedPercent;

  return (
    <div className={`${styles.progressBars} ${className ?? ''}`}>
      <div
        className={styles.used}
        style={{ width: `${usedPercent}%` }}
      >
        <NumberComponent
          className={styles.value}
          value={usedPercent}
          asset="percent"
        />
      </div>
      <div
        className={styles.unlocked}
        style={{ width: `${unlockedPercent}%` }}
      >
        <NumberComponent
          className={styles.value}
          value={unlockedPercent}
          asset="percent"
        />
      </div>
      <div
        className={styles.locked}
        style={{ width: `${lockedPercent}%` }}
      >
        <span>{lockedPercent}</span>
      </div>
    </div>
  );
};
