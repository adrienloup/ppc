// import { useFactory } from '@/src/features/factory/useFactory.ts';
// import { CardsComponent } from '@/src/components/cards/cards.component.tsx';
// import { CardComponent } from '@/src/components/card/card.component.tsx';
// import { TitleComponent } from '@/src/components/title/title.component.tsx';
// import { ProductsComponent } from '@/src/components/shop/stock/products/products.component.tsx';
// // import { ProductComponent } from '@/src/components/shop/stock/product/product.component.tsx';
// import type { ProductState } from '@/src/features/factory/factory.type.ts';
// import styles from '@/src/components/shop/stock/stock.module.scss';
//
// type ProductByCategory = Record<
//   string,
//   {
//     available: Partial<ProductState>;
//     consumed: number;
//     total: number;
//   }
// >;
//
// export const StockComponent = () => {
//   const { feature } = useFactory();
//
//   const productByCategory = Object.entries(feature).reduce<ProductByCategory>((acc, [key, value]) => {
//     if (!('category' in value) || !value.category) return acc;
//
//     const category = value.category;
//
//     if (!acc[category]) {
//       acc[category] = {
//         available: {},
//         consumed: 0,
//         total: 0,
//       };
//     }
//
//     acc[category].total++;
//
//     if (value.available) {
//       acc[category].available[key] = value;
//     } else if (value.active) {
//       acc[category].consumed++;
//     }
//
//     return acc;
//   }, {});

//   return (
//     <CardsComponent className={styles.cards}>
//       {Object.entries(productByCategory).map(([category, product]) => (
//         <CardComponent
//           key={category}
//           className={styles.card}
//         >
//           <TitleComponent
//             className={styles.title}
//             tag="h2"
//           >
//             {category} {`(${Object.keys(product.available).length}/${product.total})`}
//             {/*{category} {`(${Object.keys(product.available).length}) (${feature.consumed}/${feature.total})`}*/}
//           </TitleComponent>
//           <ProductsComponent product={product.available} />
//         </CardComponent>
//       ))}
//     </CardsComponent>
//   );
// };
import { useFactory } from '@/src/features/factory/useFactory.ts';
import { CardsComponent } from '@/src/components/cards/cards.component.tsx';
import { CardComponent } from '@/src/components/card/card.component.tsx';
import { TitleComponent } from '@/src/components/title/title.component.tsx';
import styles from '@/src/components/shop/stock/stock.module.scss';

export const StockComponent = () => {
  const { product } = useFactory();

  const productByCategory = Object.entries(product).reduce(
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
    {} as Record<string, typeof product>
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
            {category}
          </TitleComponent>
          {JSON.stringify(product)}
        </CardComponent>
      ))}
    </CardsComponent>
  );
};
