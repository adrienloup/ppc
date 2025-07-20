import { useMeca, useMecaDispatch } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { useSale, useSaleDispatch } from '@/src/domains/sale/interfaces/useSale.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import styles from '@/src/domains/industry/interfaces/ui/dashboard/dashboard.module.scss';

export const ClipperComponent = () => {
  console.log('ClipperComponent');
  const mecaDispatch = useMecaDispatch();
  const saleDispatch = useSaleDispatch();
  const { clipper, clipperBonus, clipperCost } = useMeca();
  const { funds } = useSale();

  const buyClipper = () => {
    const cost = clipperCost + (Math.random() * 10 + 10); // 0 & 1, 0 & 10, 10 & 20
    mecaDispatch({ type: 'BUY_CLIPPER', cost });
    saleDispatch({ type: 'DECREASE_FUNDS', cost });
  };

  // if (!factory.feature.clipper.available || factory.feature.clipFactory.available) return null;

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={clipperCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="clipper cost"
        />
      </DialComponent>
      <DialComponent>
        <div className={styles.group}>
          <NumberComponent
            className={styles.value}
            value={clipper}
          />
          <BadgeComponent
            prefix="x"
            value={clipperBonus}
          />
        </div>
        <LabelComponent
          className={styles.label}
          label="clippers"
        />
        <ClickerComponent
          prefix="+"
          value={1}
          disabled={funds < clipperCost}
          onClick={buyClipper}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
