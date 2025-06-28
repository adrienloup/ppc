import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { CategoryComponent } from '@/src/features/factory/components/shop/category/CategoryComponent.tsx';
import type { Categories } from '@/src/features/factory/components/shop/categories/Categories.ts';

export const CategoriesComponent = ({ className }: Categories) => {
  const factory = useFactory();

  const featureByCategory = Object.entries(factory.feature).reduce(
    (acc, [key, value]) => {
      if (!('category' in value)) return acc;

      const category = value.category!;
      acc[category] ??= { enabled: {}, consumed: 0, total: 0 };
      acc[category].total += 1;

      if (value.enabled) {
        acc[category].enabled[key] = value;
      } else if (value.actived) {
        acc[category].consumed += 1;
      }

      return acc;
    },
    {} as Record<string, { enabled: typeof factory.feature; consumed: number; total: number }>
  );

  return (
    <div className={className ? className : ''}>
      {Object.entries(featureByCategory).map(([category, feature]) => (
        <CategoryComponent
          key={category}
          category={category}
          feature={feature.enabled}
          consumed={feature.consumed}
          total={feature.total}
        />
      ))}
    </div>
  );
};
