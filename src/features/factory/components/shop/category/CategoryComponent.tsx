import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { FeaturesComponent } from '@/src/features/factory/components/shop/features/FeaturesComponent.tsx';
import { EmptyComponent } from '@/src/common/components/empty/EmptyComponent.tsx';
import type { Feature } from '@/src/features/factory/domain/Feature.ts';
import styles from '@/src/features/factory/components/shop/category/CategoryComponent.module.scss';

export const CategoryComponent = ({
  category,
  feature,
  consumed,
  total,
}: {
  category: string;
  feature: Feature;
  consumed: number;
  total: number;
}) => {
  return (
    <div className={styles.category}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        {category} {`(${Object.keys(feature).length}) (${consumed}/${total})`}
      </TitleComponent>
      {Object.keys(feature).length ? <FeaturesComponent feature={feature} /> : <EmptyComponent />}
    </div>
  );
};
