import { CategoryComponent } from '@/src/features/factory/components/shop/category/CategoryComponent.tsx';
import styles from '@/src/features/factory/components/shop/categories/CategoriesComponent.module.scss';

export const CategoriesComponent = () => {
  return (
    <div className={styles.categories}>
      <CategoryComponent
        category={'category1'}
        product={'product1'}
      />
    </div>
  );
};
