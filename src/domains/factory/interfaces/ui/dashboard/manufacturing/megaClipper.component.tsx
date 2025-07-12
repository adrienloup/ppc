import { useFactory, useFactoryDispatch } from '@/src/domains/factory/interfaces/useFactory.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/dashboard/dashboard.module.scss';

export const MegaClipperComponent = () => {
  const setFactory = useFactoryDispatch();
  const factory = useFactory();

  const buyMegaClipper = () => {
    const cost = factory.megaClipperCost + 11e2;
    setFactory({ type: 'BUY_MEGA_CLIPPER', cost });
  };

  if (!factory.feature.megaClipper.available || factory.feature.clipFactory.available) return null;

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.megaClipperCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="mega clipper cost"
        />
      </DialComponent>
      <DialComponent>
        <div className={styles.group}>
          <NumberComponent
            className={styles.value}
            value={factory.megaClipper}
          />
          {factory.megaClipperBonus > 0 ? (
            <BadgeComponent
              value={factory.megaClipperBonus}
              prefix="x"
            />
          ) : null}
        </div>
        <LabelComponent
          className={styles.label}
          label="mega clippers"
        />
        <ClickerComponent
          value={1}
          prefix="+"
          disabled={factory.funds < factory.megaClipperCost || factory.wire <= 0}
          onClick={buyMegaClipper}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
