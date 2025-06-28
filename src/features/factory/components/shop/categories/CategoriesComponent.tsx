import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { CategoryComponent } from '@/src/features/factory/components/shop/category/CategoryComponent.tsx';
import type { Categories } from '@/src/features/factory/components/shop/categories/Categories.ts';

export const CategoriesComponent = ({ className }: Categories) => {
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
    <div className={className ? className : ''}>
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
