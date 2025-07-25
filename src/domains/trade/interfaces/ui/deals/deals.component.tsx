import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/trade/interfaces/ui/deals/deals.module.scss';

export const DealsComponent = () => {
  // console.log('DealsComponent');
  const clampedUsed = Math.min(24, 46);
  const clampedUnlocked = Math.min(46, 100);
  const usedPercent = (clampedUsed / 100) * 100;
  const unlockedPercent = ((clampedUnlocked - clampedUsed) / 100) * 100;
  const lockedPercent = 100 - usedPercent - unlockedPercent;

  return (
    <div className={styles.deals}>
      <div className={styles.deal}>
        <span className={styles.label}>purchased</span>
        <NumberComponent
          value={usedPercent / 100}
          asset="percent"
        />
      </div>
      <div className={styles.deal}>
        <span className={styles.label}>unlocked</span>
        <NumberComponent
          value={unlockedPercent / 100}
          asset="percent"
        />{' '}
      </div>
      <div className={styles.deal}>
        <span className={styles.label}>locked</span>
        <NumberComponent
          value={lockedPercent / 100}
          asset="percent"
        />
      </div>
    </div>
  );
};
