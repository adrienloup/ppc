import { useFunds, useFundsDispatch } from '@/src/domains/funds/interfaces/useFunds.ts';
import { useMeca, useMecaDispatch } from '@/src/domains/machine/interfaces/useMeca.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const ClipperComponent = () => {
  // console.log('ClipperComponent');
  const mecaDispatch = useMecaDispatch();
  const fundsDispatch = useFundsDispatch();
  const { clipper, clipperBonus, clipperCost } = useMeca();
  const { funds } = useFunds();

  const buyClipper = () => {
    if (funds < clipperCost) return;
    const newClipperCost = clipperCost + (Math.random() * 10 + 10); // 0 1, 0 10, 10 20
    mecaDispatch({ type: 'BUY_CLIPPER', cost: newClipperCost });
    fundsDispatch({ type: 'DECREASE_FUNDS', cost: clipperCost });
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
