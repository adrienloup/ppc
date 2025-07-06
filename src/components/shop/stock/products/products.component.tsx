import { ProductComponent } from '@/src/components/shop/stock/product/product.component.tsx';
import type { ProductState } from '@/src/features/factory/factory.type.ts';

export const ProductsComponent = ({ product }: { product: Partial<ProductState> }) => {
  return (
    <>
      {Object.keys(product).length > 0
        ? Object.entries(product).map(([productName, productValue]) => (
            <ProductComponent
              key={productName}
              productName={productName}
              productValue={productValue!}
            />
          ))
        : 'empty'}
    </>
  );
};
