import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/store/store.module.scss';

export const DealComponent = () => {
  // console.log('DealComponent');
  const clampedUsed = Math.min(9, 12);
  const clampedUnlocked = Math.min(12, 100);
  const usedPercent = (clampedUsed / 100) * 100;
  const unlockedPercent = ((clampedUnlocked - clampedUsed) / 100) * 100;
  const lockedPercent = 100 - usedPercent - unlockedPercent;

  return (
    <div className={styles.deals}>
      <div className={styles.deal}>
        <NumberComponent
          value={usedPercent / 100}
          asset="percent"
        />
        <span className={styles.label}>purchased</span>
      </div>
      <div className={styles.deal}>
        <NumberComponent
          value={unlockedPercent / 100}
          asset="percent"
        />
        <span className={styles.label}>unlocked</span>
      </div>
      <div className={styles.deal}>
        <NumberComponent
          value={lockedPercent / 100}
          asset="percent"
        />
        <span className={styles.label}>locked</span>
      </div>
    </div>
  );
};
