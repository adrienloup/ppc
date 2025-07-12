import { useFactory } from '@/src/domains/factory/interfaces/useFactory.ts';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { ProductsComponent } from '@/src/domains/factory/interfaces/ui/shop/showcase/products/products.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/shop/shop.module.scss';

export const ShowcaseComponent = () => {
  const { product } = useFactory();

  type ProductByCategory = Record<string, { enabled: typeof product; total: number }>;

  const productByCategory = Object.entries(product).reduce((acc, [key, value]) => {
    if (!('category' in value) || !value.category) return acc;
    const category = value.category;

    acc[category] ??= { enabled: {}, total: 0 };
    acc[category].total += 1;

    // if (value.available) acc[category].enabled[key] = value;
    acc[category].enabled[key] = value;

    return acc;
  }, {} as ProductByCategory);

  return Object.entries(productByCategory).map(([category, product]) => (
    <CardComponent
      key={category}
      className={styles.card}
    >
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        {category} {`(${Object.keys(product.enabled).length}/${product.total})`}
      </TitleComponent>
      {Object.keys(product.enabled).length > 0 ? <ProductsComponent product={product.enabled} /> : 'empty'}
    </CardComponent>
  ));
};
