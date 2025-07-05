import { useCallback } from 'react';
import { useAuth } from '@/src/features/authentification/useAuth.ts';
import { useAccount } from '@/src/features/account/useAccount.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/useFactory.ts';
import { DialsComponent } from '@/src/components/dials/dials.component.tsx';
import { DialComponent } from '@/src/components/dial/dial.component.tsx';
import { ClickerComponent } from '@/src/components/clicker/clicker.component.tsx';
import { LabelComponent } from '@/src/components/label/label.component.tsx';
import { NumberComponent } from '@/src/components/number/number.component.tsx';
import { BadgeComponent } from '@/src/components/badge/badge.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const WireComponent = () => {
  const { user } = useAuth();
  const { pause } = useAccount();
  const setFactory = useFactoryDispatch();
  const factory = useFactory();

  const enabled = !!user && !pause && !factory.feature.production.available;

  const buyWire = () => {
    const cost = factory.wireCost + (Math.random() * (1.25 - 0.25) + 0.25); // 0.25 et 1.25
    setFactory({ type: 'BUY_WIRE', cost });
  };

  const updateWireCost = useCallback(() => {
    const cost = factory.wireCost > 8 ? factory.wireCost - 0.26 : Math.random() * 8 + 12; // 0 et 1, 0 et 8, 12 et 20
    setFactory({ type: 'UPDATE_WIRE_COST', cost });
  }, [factory.wireCost]);

  useInterval(updateWireCost, 1e4, enabled);

  if (factory.feature.production.available) return null;

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.wireCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="wire cost"
        />
      </DialComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.wire}
        />
        <BadgeComponent value={factory.wireQuantity} />
        <LabelComponent
          className={styles.label}
          label="wire stock"
        />
        <ClickerComponent
          value={factory.wireQuantity}
          prefix="+"
          disabled={factory.funds < factory.wireCost}
          onClick={buyWire}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
