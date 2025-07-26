import { useMeca, useMecaDispatch } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { useSale, useSaleDispatch } from '@/src/domains/sale/interfaces/useSale.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const ClipperComponent = () => {
  // console.log('ClipperComponent');
  const mecaDispatch = useMecaDispatch();
  const saleDispatch = useSaleDispatch();
  const { clipper, clipperBonus, clipperCost } = useMeca();
  const { funds } = useSale();

  const buyClipper = () => {
    const cost = clipperCost + (Math.random() * 10 + 10);
    mecaDispatch({ type: 'BUY_CLIPPER', cost });
    saleDispatch({ type: 'DECREASE_FUNDS', cost });
  };

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={clipperCost}
          asset="currency"
          decimal
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
            status="success"
          />
        </div>
        <LabelComponent
          className={styles.label}
          label="clipper"
        />
        <ClickerComponent
          className={styles.button}
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
