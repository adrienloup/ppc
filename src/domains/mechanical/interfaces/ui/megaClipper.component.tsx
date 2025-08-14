import { useTranslation } from 'react-i18next';
import { useFunds, useFundsDispatch } from '@/src/domains/funds/interfaces/useFunds.ts';
import { useMeca, useMecaDispatch } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const MegaClipperComponent = () => {
  const { t } = useTranslation();
  const mecaDispatch = useMecaDispatch();
  const fundsDispatch = useFundsDispatch();
  const { megaClipper, megaClipperBonus, megaClipperCost } = useMeca();
  const { funds } = useFunds();

  // const shutdown = feature.clipFactory.unlocked;
  const shutdown = true;

  const buyMegaClipper = () => {
    if (funds < megaClipperCost) return;
    const newMegaClipperCost = megaClipperCost + 11e2;
    mecaDispatch({ type: 'MEGA_CLIPPER', cost: newMegaClipperCost });
    fundsDispatch({ type: 'DECREASE_FUNDS', funds: megaClipperCost });
  };

  // if (!feature.megaClipper.unlocked) return null;

  return (
    <DialsComponent className={classNames(styles.dials, shutdown ? styles.shutdown : '')}>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={megaClipperCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label={t('factory.megaClipperCost')}
        />
      </DialComponent>
      <DialComponent>
        <div className={styles.group}>
          <NumberComponent
            className={styles.value}
            value={megaClipper}
          />
          {megaClipperBonus > 1 && !shutdown && (
            <BadgeComponent
              prefix="x"
              value={megaClipperBonus}
              status="success"
            />
          )}
        </div>
        <LabelComponent
          className={styles.label}
          label={t('factory.megaClipper')}
        />
        <ClickerComponent
          className={styles.button}
          prefix="+"
          value={1}
          disabled={funds < megaClipperCost || shutdown}
          onClick={buyMegaClipper}
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
