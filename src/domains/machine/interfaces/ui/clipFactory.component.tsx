import { useTranslation } from 'react-i18next';
import { useFunds, useFundsDispatch } from '@/src/domains/funds/interfaces/useFunds.ts';
import { useMeca, useMecaDispatch } from '@/src/domains/machine/interfaces/useMeca.ts';
import { OverConsumptionComponent } from '@/src/domains/power/interfaces/ui/overConsumption.component.tsx';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const ClipFactoryComponent = () => {
  // console.log('ClipFactoryComponent');
  const { t } = useTranslation();
  const mecaDispatch = useMecaDispatch();
  const fundsDispatch = useFundsDispatch();
  // const { clipFactory, clipFactoryBonus, clipFactoryCost } = useMeca();
  const { clipFactory, clipFactoryCost } = useMeca();
  const { funds } = useFunds();

  const buyClipFactory = () => {
    if (funds < clipFactoryCost) return;
    const newClipFactoryCost = clipFactoryCost + (Math.random() * 5e5 + 5e5); // 0 1, 0 5e5, 5e5 1e6
    mecaDispatch({ type: 'BUY_CLIP_FACTORY', cost: newClipFactoryCost });
    fundsDispatch({ type: 'DECREASE_FUNDS', cost: clipFactoryCost });
  };

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={clipFactoryCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label={t('factory.clipFactoryCost')}
        />
      </DialComponent>
      <DialComponent>
        <div className={styles.group}>
          <NumberComponent
            className={styles.value}
            value={clipFactory}
          />
          <BadgeComponent
            prefix="x"
            value={500}
            // value={clipFactoryBonus}
            status="success"
          />
        </div>
        <LabelComponent
          className={styles.label}
          label={t('factory.clipFactories')}
        />
        <ClickerComponent
          className={styles.button}
          prefix="+"
          value={1}
          disabled={funds < clipFactoryCost || clipFactory >= 1e8}
          onClick={buyClipFactory}
        >
          +
        </ClickerComponent>
        {/*{clipFactory >= 1e8 && (*/}
        <BadgeComponent
          className={styles.warning}
          status="warning"
          label={t('factory.noSpace')}
        />
        {/*)}*/}
        <OverConsumptionComponent />
      </DialComponent>
    </DialsComponent>
  );
};
