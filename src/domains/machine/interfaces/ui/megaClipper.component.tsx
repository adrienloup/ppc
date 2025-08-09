import { useTranslation } from 'react-i18next';
import { useFunds, useFundsDispatch } from '@/src/domains/funds/interfaces/useFunds.ts';
import { useMeca, useMecaDispatch } from '@/src/domains/machine/interfaces/useMeca.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const MegaClipperComponent = () => {
  // console.log('MegaClipperComponent');
  const { t } = useTranslation();
  const mecaDispatch = useMecaDispatch();
  const fundsDispatch = useFundsDispatch();
  const { megaClipper, megaClipperBonus, megaClipperCost } = useMeca();
  const { funds } = useFunds();

  const buyMegaClipper = () => {
    if (funds < megaClipperCost) return;
    const newMegaClipperCost = megaClipperCost + 11e2;
    mecaDispatch({ type: 'BUY_MEGA_CLIPPER', cost: newMegaClipperCost });
    fundsDispatch({ type: 'DECREASE_FUNDS', cost: megaClipperCost });
  };

  return (
    <DialsComponent>
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
          <BadgeComponent
            prefix="x"
            value={megaClipperBonus}
            status="success"
          />
        </div>
        <LabelComponent
          className={styles.label}
          label={t('factory.megaClippers')}
        />
        <ClickerComponent
          className={styles.button}
          prefix="+"
          value={1}
          disabled={funds < megaClipperCost}
          onClick={buyMegaClipper}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
