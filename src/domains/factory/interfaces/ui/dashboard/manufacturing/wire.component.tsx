import { useCallback } from 'react';
import { useFactory, useFactoryDispatch } from '@/src/domains/factory/interfaces/useFactory.ts';
import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useAccount } from '@/src/domains/account/interfaces/useAccount.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/dashboard/dashboard.module.scss';

export const WireComponent = () => {
  const setFactory = useFactoryDispatch();
  const factory = useFactory();
  const { user } = useAuth();
  const { play } = useAccount();

  const buyWire = () => {
    const cost = factory.wireCost + (Math.random() * (1.25 - 0.25) + 0.25); // 0.25 et 1.25
    setFactory({ type: 'BUY_WIRE', cost });
  };

  const updateWireCost = useCallback(() => {
    const cost = factory.wireCost > 8 ? factory.wireCost - 0.26 : Math.random() * 8 + 12; // 0 et 1, 0 et 8, 12 et 20
    setFactory({ type: 'UPDATE_WIRE_COST', cost });
  }, [factory.wireCost]);

  useInterval(updateWireCost, 1e4, !!user && !play);
  // useInterval(updateWireCost, 1e4, !!user && !play && !factory.feature.production.available);

  // if (factory.feature.production.available) return null;

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.wireCost}
          asset="currency"
          decimal
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
        <BadgeComponent
          value={factory.wireQuantity}
          status="warning"
        />
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
