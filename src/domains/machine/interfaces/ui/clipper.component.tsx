import { useTranslation } from 'react-i18next';
import { useFunds, useFundsDispatch } from '@/src/domains/funds/interfaces/useFunds.ts';
import { useMeca, useMecaDispatch } from '@/src/domains/machine/interfaces/useMeca.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const ClipperComponent = () => {
  const { t } = useTranslation();
  const mecaDispatch = useMecaDispatch();
  const fundsDispatch = useFundsDispatch();
  // const { clipper, clipperBonus, clipperCost } = useMeca();
  const { clipper, clipperCost } = useMeca();
  const { funds } = useFunds();

  // const shutdown = feature.clipFactory.unlocked;
  const shutdown = false;

  const buyClipper = () => {
    if (funds < clipperCost) return;
    const newClipperCost = clipperCost + (Math.random() * 10 + 10); // 0 1, 0 10, 10 20
    mecaDispatch({ type: 'CLIPPER', cost: newClipperCost });
    fundsDispatch({ type: 'DECREASE_FUNDS', funds: clipperCost });
  };

  // if (!feature.clipper.unlocked) return null;

  return (
    <DialsComponent className={classNames(styles.dials, shutdown ? styles.shutdown : '')}>
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
          {/*{clipperBonus > 1 && !shutdown && (*/}
          <BadgeComponent
            prefix="x"
            // value={clipperBonus}
            value={500}
            status="success"
          />
          {/*)}*/}
        </div>
        <LabelComponent
          className={styles.label}
          label="clipper"
        />
        <ClickerComponent
          className={styles.button}
          prefix="+"
          value={1}
          disabled={funds < clipperCost || shutdown}
          onClick={buyClipper}
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
