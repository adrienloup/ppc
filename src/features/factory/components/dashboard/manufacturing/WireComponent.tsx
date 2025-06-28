import { useCallback } from 'react';
import { useAuthentification } from '@/src/features/authentification/infrastructure/useAuthentification.ts';
import { useProfile } from '@/src/features/profile/infrastructure/useProfile.ts';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { DialsComponent } from '@/src/common/components/dials/DialsComponent.tsx';
import { DialComponent } from '@/src/common/components/dial/DialComponent.tsx';
import { ClickerComponent } from '@/src/common/components/clicker/ClickerComponent.tsx';
import { ThumbnailComponent } from '@/src/common/components/thumbnail/ThumbnailComponent.tsx';
import { IconComponent } from '@/src/common/components/icon/IconComponent.tsx';

export const WireComponent = () => {
  const [authentification] = useAuthentification();
  const [profile] = useProfile();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const buyWire = () => {
    const cost = factory.wireCost + (Math.random() * (1.25 - 0.25) + 0.25); // 0.25 et 1.25
    setFactory({ type: 'BUY_WIRE', cost });
  };

  const updateWireCost = useCallback(() => {
    const cost = factory.wireCost > 8 ? factory.wireCost - 0.26 : Math.random() * 8 + 12; // 0 et 1, 0 et 8, 12 et 20
    setFactory({ type: 'UPDATE_WIRE_COST', cost });
  }, [factory.wireCost]);

  useInterval(updateWireCost, 1e4, profile.isPlay && !!authentification.user && !factory.feature.production.enabled);

  if (factory.feature.production.enabled) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={factory.wireCost}
        label="wire cost"
        unit="currency"
        tile={<ThumbnailComponent value={factory.wireQuantity} />}
        decimal
      />
      <DialComponent
        value={factory.wire}
        label="wire"
      />
      <ClickerComponent
        value={factory.wireQuantity}
        prefix="+"
        suffix="wire"
        disabled={factory.funds < factory.wireCost}
        onClick={buyWire}
      >
        <IconComponent icon="add_circle" />
      </ClickerComponent>
    </DialsComponent>
  );
};
