import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { FeaturesComponent } from '@/src/features/factory/components/shop/features/FeaturesComponent.tsx';
// import { EmptyComponent } from '@/src/common/components/empty/emptyComponent.tsx';
import type { Feature } from '@/src/features/factory/domain/Feature.ts';
import styles from '@/src/features/factory/components/shop/category/CategoryComponent.module.scss';

export const CategoryComponent = ({ category, feature }: { category: string; feature: Feature }) => {
  return (
    <div className={styles.category}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        {category} {`(${Object.keys(feature).length})`}
      </TitleComponent>
      {Object.keys(feature).length ? <FeaturesComponent feature={feature} /> : 'empty'}
      {/*{Object.keys(feature).length ? <FeaturesComponent feature={feature} /> : <EmptyComponent />}*/}
    </div>
  );
};
