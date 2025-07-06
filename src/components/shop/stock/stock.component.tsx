import { useFactory } from '@/src/features/factory/useFactory.ts';
import { CardsComponent } from '@/src/components/cards/cards.component.tsx';
import { CardComponent } from '@/src/components/card/card.component.tsx';
import { TitleComponent } from '@/src/components/title/title.component.tsx';
import { ProductsComponent } from '@/src/components/shop/stock/products/products.component.tsx';
import styles from '@/src/components/shop/stock/stock.module.scss';

export const StockComponent = () => {
  const { product } = useFactory();

  const productByCategory = Object.entries(product).reduce(
    (acc, [key, value]) => {
      if (!('category' in value) || !value.category) return acc;

      const category = value.category;

      acc[category] ??= { enabled: {}, total: 0 };
      acc[category].total += 1;

      if (value.available) {
        acc[category].enabled[key] = value;
      }
      return acc;
    },
    {} as Record<string, { enabled: typeof product; total: number }>
  );

  return (
    <CardsComponent className={styles.cards}>
      {Object.entries(productByCategory).map(([category, product]) => (
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
      ))}
    </CardsComponent>
  );
};
