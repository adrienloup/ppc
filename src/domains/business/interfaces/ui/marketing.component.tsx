import { useBusiness, useBusinessDispatch } from '@/src/domains/business/interfaces/useBusiness.ts';
import { useSale, useSaleDispatch } from '@/src/domains/sale/interfaces/useSale.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const MarketingComponent = () => {
  // console.log('MarketingComponent');
  const businessDispatch = useBusinessDispatch();
  const fundsDispatch = useSaleDispatch();
  const { marketing, marketingCost } = useBusiness();
  const { funds } = useSale();

  const buyMarketing = () => {
    const cost = Math.max(100, Math.min(marketingCost * 2.5, 256e2));
    businessDispatch({ type: 'INCREASE_MARKETING', cost });
    fundsDispatch({ type: 'DECREASE_FUNDS', cost });
  };

  return (
    <DialsComponent disabled={marketing >= 10}>
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
        <div className={styles.group}>
          <NumberComponent
            className={styles.value}
            value={marketing}
            valueMax={10}
          />
          <BadgeComponent
            status="warning"
            label={marketing >= 10 ? 'sold out' : undefined}
          />
        </div>
        <LabelComponent
          className={styles.label}
          label="marketing level"
        />
        <ClickerComponent
          className={styles.button}
          prefix="+"
          value={1}
          disabled={funds < marketingCost}
          onClick={buyMarketing}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
