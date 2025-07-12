import { ProductComponent } from '@/src/domains/factory/interfaces/ui/shop/stock/product/product.component.tsx';
import type { ProductState } from '@/src/domains/factory/domain/product.type.ts';

export const ProductsComponent = ({ product }: { product: ProductState }) => {
  return Object.entries(product).map(([title, product]) => (
    <ProductComponent
      key={title}
      title={title}
      product={product!}
    />
  ));
};
