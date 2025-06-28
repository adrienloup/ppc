import { useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/components/dials/DialsComponent.tsx';
import { DialComponent } from '@/src/common/components/dial/DialComponent.tsx';
import { ClickerComponent } from '@/src/common/components/clicker/ClickerComponent.tsx';
import { ThumbnailComponent } from '@/src/common/components/thumbnail/ThumbnailComponent.tsx';
import { IconComponent } from '@/src/common/components/icon/IconComponent.tsx';

export const ClipperComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const buyClipper = () => {
    const cost = factory.clipperCost + (Math.random() * 10 + 10); // 10, 20
    setFactory({ type: 'BUY_CLIPPER', cost });
  };

  if (!factory.feature.clipper.enabled || factory.feature.clipFactory.enabled) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={factory.clipperCost}
        label={t('dashboard.clipperCost')}
        unit="currency"
        decimal
      />
      <DialComponent
        value={factory.clipper}
        label={t('dashboard.clipper')}
        tile={
          factory.clipperBonus > 0 ? (
            <ThumbnailComponent
              value={factory.clipperBonus}
              label="x"
              status="success"
            />
          ) : null
        }
      />
      <ClickerComponent
        aria-label="make clipper"
        value={1}
        prefix="+"
        suffix={t('dashboard.clipper')}
        disabled={factory.funds < factory.clipperCost || factory.wire <= 0}
        onClick={buyClipper}
      >
        <IconComponent icon="add_circle" />
      </ClickerComponent>
    </DialsComponent>
  );
};
