import type { Product } from '@/src/features/factory/components/shop/product/Product.ts';

export interface Category {
  category: string;
  products: Product[];
}
