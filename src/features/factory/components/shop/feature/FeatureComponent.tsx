import { Trans, useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { TitleComponent } from '@/src/common//components/title/TitleComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import { NumberComponent } from '@/src/common/components/number/NumberComponent.tsx';
import type { FeatureState } from '@/src/features/factory/domain/Feature.ts';
import styles from '@/src/features/factory/components/shop/feature/FeatureComponent.module.scss';

export const FeatureComponent = ({
  featureName,
  featureValue,
}: {
  featureName: string;
  featureValue: FeatureState;
}) => {
  const { t } = useTranslation();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const onFeatureClick = (featureName: string, featureValue: FeatureState) => {
    setFactory({ type: 'BUY_FEATURE', feature: featureName });
    if (!Array.isArray(featureValue.effects) && typeof featureValue.effects === 'object') {
      setFactory(featureValue.effects);
    }
  };

  const isPurchasable = featureValue.costs?.every(({ unit, value }) => {
    const available = factory[unit] ?? 0;
    return available >= value;
  });

  return (
    <ButtonComponent
      className={classNames([styles.feature, !isPurchasable ? styles.disabled : ''])}
      tabIndex={!isPurchasable ? -1 : 0}
      onClick={() => onFeatureClick(featureName, featureValue)}
    >
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        {t(`shop.${featureName}.title`)}
      </TitleComponent>
      <div className={styles.text}>
        <Trans
          i18nKey={`shop.${featureName}.effect`}
          components={{
            firstEffect: (
              <>
                {Array.isArray(featureValue.effects) && featureValue.effects.every((r) => typeof r === 'object') ? (
                  <NumberComponent value={featureValue.effects?.[0]?.value} />
                ) : null}
              </>
            ),
            secondEffect: (
              <>
                {Array.isArray(featureValue.effects) && featureValue.effects.every((r) => typeof r === 'object') ? (
                  <NumberComponent value={featureValue.effects?.[1]?.value} />
                ) : null}
              </>
            ),
          }}
        />
      </div>
      <div className={styles.text}>
        <Trans
          i18nKey={`shop.${featureName}.cost`}
          components={{
            firstCost: (
              <>
                {Array.isArray(featureValue.costs) && featureValue.costs.every((r) => typeof r === 'object') ? (
                  <NumberComponent value={featureValue.costs?.[0]?.value} />
                ) : null}
              </>
            ),
            secondCost: (
              <>
                {Array.isArray(featureValue.costs) && featureValue.costs.every((r) => typeof r === 'object') ? (
                  <NumberComponent value={featureValue.costs?.[1]?.value} />
                ) : null}
              </>
            ),
          }}
        />
      </div>
      <div className={styles.text}>
        <Trans
          i18nKey={`shop.${featureName}.quantity`}
          components={{
            quantity: <NumberComponent value={featureValue.quantity!} />,
          }}
        />
      </div>
    </ButtonComponent>
  );
};
