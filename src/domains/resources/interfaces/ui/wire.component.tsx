import { useTranslation } from 'react-i18next';
import { useFunds, useFundsDispatch } from '@/src/domains/funds/interfaces/useFunds.ts';
import { useResDispatch, useResources } from '@/src/domains/resources/interfaces/useResouces.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const WireComponent = () => {
  const { t } = useTranslation();
  const resourcesDispatch = useResDispatch();
  const fundsDispatch = useFundsDispatch();
  const { wire, wireCost, wireQuantity } = useResources();
  const { funds } = useFunds();

  // const shutdown = feature.clipFactory.unlocked;
  const shutdown = false;

  const buyWire = () => {
    if (funds < wireCost) return;
    resourcesDispatch({ type: 'WIRE' });
    fundsDispatch({ type: 'DECREASE_FUNDS', funds: wireCost });
  };

  return (
    <DialsComponent className={classNames(styles.dials, shutdown ? styles.shutdown : '')}>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={wireCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="wire cost"
        />
      </DialComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={wire}
        />
        <LabelComponent
          className={styles.label}
          label="wire stock"
        />
        <div className={styles.action}>
          <ClickerComponent
            className={styles.button}
            prefix="+"
            value={wireQuantity}
            disabled={funds < wireCost || shutdown}
            onClick={buyWire}
          >
            +
          </ClickerComponent>
          {!shutdown && <BadgeComponent value={wireQuantity} />}
        </div>
        {shutdown && (
          <BadgeComponent
            className={styles.badge}
            status="warning"
            label={t('app.shutdown')}
          />
        )}
        {wire < 1 && !shutdown && (
          <BadgeComponent
            className={styles.badge}
            status="error"
            label={t('app.stockOut')}
          />
        )}
      </DialComponent>
    </DialsComponent>
  );
};
