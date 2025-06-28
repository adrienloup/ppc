import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/components/dials/DialsComponent.tsx';
import { DialComponent } from '@/src/common/components/dial/DialComponent.tsx';
import { ClickerComponent } from '@/src/common/components/clicker/ClickerComponent.tsx';
import { IconComponent } from '@/src/common/components/icon/IconComponent.tsx';

export const ClipPerSecondComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  return (
    <DialsComponent>
      <DialComponent
        value={factory.clipPerSecond}
        label="clip per second"
      />
      <ClickerComponent
        aria-label="make clip"
        value={1}
        prefix="+"
        suffix="clip"
        disabled={factory.wire <= 0}
        onClick={() => setFactory({ type: 'UNIT_PRODUCTION' })}
      >
        <IconComponent icon="add_circle" />
      </ClickerComponent>
    </DialsComponent>
  );
};
