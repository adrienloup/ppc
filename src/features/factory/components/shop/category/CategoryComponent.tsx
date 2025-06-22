import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { FeaturesComponent } from '@/src/features/factory/components/showcase/features/featuresComponent.tsx';
import { EmptyComponent } from '@/src/common/shared/components/empty/emptyComponent.tsx';
import type { Feature } from '@/src/features/factory/domain/feature.ts';
import styles from '@/src/features/factory/components/shop/category/CategoryComponent.module.scss';
import type { Category } from '@/src/features/factory/components/shop/category/Category.ts';

export const CategoryComponent = ({ category, products }: Category) => {
  return (
    <div className={styles.category}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        {category} {`(${products.length})`}
      </TitleComponent>
      {products.length ? <FeaturesComponent feature={feature} /> : <EmptyComponent />}
    </div>
  );
};
