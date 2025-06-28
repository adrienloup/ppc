import { useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/components/dials/DialsComponent.tsx';
import { DialComponent } from '@/src/common/components/dial/DialComponent.tsx';
import { ClickerComponent } from '@/src/common/components/clicker/ClickerComponent.tsx';
import { ThumbnailComponent } from '@/src/common/components/thumbnail/ThumbnailComponent.tsx';

export const ClipFactoryComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const buyClipFactory = () => {
    const cost = factory.clipFactoryCost + (Math.random() * 5e5 + 5e5); // 5e5 et 1e6
    setFactory({ type: 'BUY_CLIP_FACTORY', cost });
  };

  if (!factory.feature.clipFactory.enabled) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={factory.clipFactoryCost}
        label={t('factory.clipFactoryCost')}
        unit="currency"
      />
      <DialComponent
        value={factory.clipFactory}
        label={t('factory.clipFactories')}
        tile={
          <>
            {factory.clipFactoryBonus > 0 ? (
              <ThumbnailComponent
                value={factory.clipFactoryBonus}
                label="x"
                status="success"
              />
            ) : null}
            {factory.clipFactory >= 1e8 ? (
              <ThumbnailComponent
                label={t('factory.noSpace')}
                status="warning"
              />
            ) : null}
          </>
        }
      />
      <ClickerComponent
        value={1}
        prefix="+"
        suffix={t('factory.clipFactory')}
        disabled={factory.funds < factory.clipFactoryCost || factory.clipFactory >= 1e8}
        onClick={buyClipFactory}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
