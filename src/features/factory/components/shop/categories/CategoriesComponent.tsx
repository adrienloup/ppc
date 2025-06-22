import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { CategoryComponent } from '@/src/features/factory/components/shop/category/CategoryComponent.tsx';
import styles from '@/src/features/factory/components/shop/categories/CategoriesComponent.module.scss';

export const CategoriesComponent = () => {
  const factory = useFactory();

  const filteredFeature = Object.entries(factory.feature).reduce(
    (acc, [key, value]) => {
      if ('category' in value) {
        acc[key] = value;
      }
      return acc;
    },
    {} as typeof factory.feature
  );

  const groupedByCategory = Object.entries(filteredFeature).reduce(
    (acc, [key, value]) => {
      const category = value.category;
      if (!acc[category!]) {
        acc[category!] = {};
      }
      if (value.enabled) {
        acc[category!][key] = value;
      }
      return acc;
    },
    {} as Record<string, typeof filteredFeature>
  );

  return (
    <div className={styles.categories}>
      {Object.entries(groupedByCategory).map(([category, feature]) => (
        <CategoryComponent
          key={category}
          category={category}
          feature={feature}
        />
      ))}
    </div>
  );
};
