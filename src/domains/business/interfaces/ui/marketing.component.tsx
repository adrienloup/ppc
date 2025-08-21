import { useTranslation } from 'react-i18next';
// import { getMarketingBonus } from '@/src/domains/business/interfaces/getMarketingBonus.ts';
import { getMarketingBonus } from '@/src/domains/business/interfaces/getMarketingBonus.ts';
import { useBusiness, useBusiDispatch } from '@/src/domains/business/interfaces/useBusiness.ts';
import { useFunds, useFundsDispatch } from '@/src/domains/funds/interfaces/useFunds.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const MarketingComponent = () => {
  const { t } = useTranslation();
  const businessDispatch = useBusiDispatch();
  const fundsDispatch = useFundsDispatch();
  const { marketing, marketingCost } = useBusiness();
  const { funds } = useFunds();

  const shutdown = marketing >= 10;

  const buyMarketing = () => {
    if (shutdown) return;
    businessDispatch({ type: 'INCREASE_MARKETING' });
    businessDispatch({ type: 'MARKETING_BONUS', bonus: getMarketingBonus(marketing + 1) });
    fundsDispatch({ type: 'DECREASE_FUNDS', funds: marketingCost });
  };

  return (
    <DialsComponent className={classNames(styles.dials, shutdown ? styles.shutdown : '')}>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={marketingCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="marketing cost"
        />
      </DialComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={marketing}
          valueMax={10}
        />
        <LabelComponent
          className={styles.label}
          label="marketing level"
        />
        <ClickerComponent
          className={styles.button}
          prefix="+"
          value={1}
          disabled={funds < marketingCost || shutdown}
          onClick={buyMarketing}
        >
          +
        </ClickerComponent>
        {shutdown && (
          <BadgeComponent
            className={styles.badge}
            status="warning"
            label={t('app.shutdown')}
          />
        )}
      </DialComponent>
    </DialsComponent>
  );
};
