import { useMerch } from '@/src/domains/merchandise/interfaces/useMer.ts';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/domains/factory/interfaces/ui/store/store.module.scss';

export const ShoppingComponent = () => {
  const TOTAL = 28; // 26
  const merchandise = useMerch();
  const purchasedGroup = Object.values(merchandise).filter((item) => item.purchased).length;
  const unlockedGroup = Object.values(merchandise).filter((item) => item.unlocked).length;
  const clampedPurchased = Math.min(purchasedGroup, unlockedGroup);
  const clampedUnlocked = Math.min(unlockedGroup, TOTAL);
  const purchasedPercent = (clampedPurchased / 100) * 100;
  const unlockedPercent = ((clampedUnlocked - clampedPurchased) / 100) * 100;
  const lockedPercent = 100 - purchasedPercent - unlockedPercent;

  return (
    <div className={styles.shopping}>
      <div className={classNames(styles.inner, styles.purchased)}>
        <NumberComponent
          value={purchasedPercent / 100}
          asset="percent"
        />
        <span className={styles.label}>purchased</span>
      </div>
      <div className={classNames(styles.inner, styles.unlocked)}>
        <NumberComponent
          value={unlockedPercent / 100}
          asset="percent"
        />
        <span className={styles.label}>unlocked</span>
      </div>
      <div className={styles.inner}>
        <NumberComponent
          value={lockedPercent / 100}
          asset="percent"
        />
        <span className={styles.label}>locked</span>
      </div>
    </div>
  );
};
