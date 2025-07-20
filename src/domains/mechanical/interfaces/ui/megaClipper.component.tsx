import { useTranslation } from 'react-i18next';
import { useMeca, useMecaDispatch } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { useSale, useSaleDispatch } from '@/src/domains/sale/interfaces/useSale.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import styles from '@/src/domains/industry/interfaces/ui/dashboard/dashboard.module.scss';

export const MegaClipperComponent = () => {
  // console.log('MegaClipperComponent');
  const { t } = useTranslation();
  const mecaDispatch = useMecaDispatch();
  const saleDispatch = useSaleDispatch();
  const { megaClipper, megaClipperBonus, megaClipperCost } = useMeca();
  const { funds } = useSale();

  const buyMegaClipper = () => {
    const cost = megaClipperCost + 11e2;
    mecaDispatch({ type: 'BUY_MEGA_CLIPPER', cost });
    saleDispatch({ type: 'DECREASE_FUNDS', cost });
  };

  // if (!factory.feature.megaClipper.enabled || factory.feature.clipFactory.enabled) return null;

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
