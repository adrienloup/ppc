import { useTranslation } from 'react-i18next';
import { useMerch } from '@/src/domains/merchandise/interfaces/useMerch.ts';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/domains/factory/interfaces/ui/store/store.module.scss';

export const ShoppingComponent = () => {
  const { t } = useTranslation();
  const merchandise = useMerch();
  const total = Object.keys(merchandise).length;
  const purchasedGroup = Object.values(merchandise).filter((item) => item.purchased).length;
  const unlockedGroup = Object.values(merchandise).filter((item) => item.unlocked).length;
  const clampedPurchased = Math.min(purchasedGroup, unlockedGroup);
  const clampedUnlocked = Math.min(unlockedGroup, total);
  const purchasedPercent = (clampedPurchased / total) * 100;
  const unlockedPercent = ((clampedUnlocked - clampedPurchased) / total) * 100;
  const lockedPercent = 100 - purchasedPercent - unlockedPercent;

  return (
    <div className={styles.shopping}>
      <div className={classNames(styles.inner, styles.purchased)}>
        <NumberComponent
          value={purchasedPercent / 100}
          asset="percent"
        />
        <span className={styles.label}>{t('app.purchased')}</span>
      </div>
      <div className={classNames(styles.inner, styles.unlocked)}>
        <NumberComponent
          value={unlockedPercent / 100}
          asset="percent"
        />
        <span className={styles.label}>{t('app.unlocked')}</span>
      </div>
      <div className={styles.inner}>
        <NumberComponent
          value={lockedPercent / 100}
          asset="percent"
        />
        <span className={styles.label}>{t('app.locked')}</span>
      </div>
    </div>
  );
};
