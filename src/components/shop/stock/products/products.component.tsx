import { ProductComponent } from '@/src/components/shop/stock/product/product.component.tsx';
import type { ProductState } from '@/src/features/factory/product.type.ts';

export const ProductsComponent = ({ product }: { product: ProductState }) => {
  return (
    <>
      {Object.entries(product).map(([title, product]) => (
        <ProductComponent
          key={title}
          title={title}
          product={product!}
        />
      ))}
    </>
  );
};
