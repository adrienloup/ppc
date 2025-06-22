import { FeatureComponent } from '@/src/features/factory/components/shop/feature/FeatureComponent.tsx';
import type { Feature } from '@/src/features/factory/domain/Feature.ts';
import styles from '@/src/features/factory/components/shop/features/FeaturesComponent.module.scss';

export const FeaturesComponent = ({ feature }: { feature: Feature }) => {
  return (
    <div className={styles.features}>
      {Object.entries(feature).map(([featureName, featureValue]) => (
        <FeatureComponent
          key={featureName}
          featureName={featureName}
          featureValue={featureValue}
        />
      ))}
    </div>
  );
};
