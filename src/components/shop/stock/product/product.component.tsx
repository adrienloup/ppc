import { useFactory } from '@/src/features/factory/useFactory.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { TitleComponent } from '@/src/components/common/title/title.component';
import { ButtonComponent } from '@/src/components/common/button/button.component.tsx';
import { NumberComponent } from '@/src/components/common/number/number.component.tsx';
import type { Product } from '@/src/features/factory/product.type.ts';
import styles from '@/src/components/shop/stock/product/product.module.scss';

export const ProductComponent = ({ title, product }: { title: string; product: Product }) => {
  const factory = useFactory();

  const purchasable = product.cost?.every(({ asset, value }) => {
    const available = factory[asset] ?? 0;
    return available >= value;
  });

  return (
    <div className={classNames([styles.product, !purchasable ? styles.disabled : ''])}>
      <TitleComponent
        tag="h3"
        className={styles.title}
      >
        {title}
      </TitleComponent>
      <div className={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's
      </div>
      <div className={styles.text}>
        cost: <NumberComponent value={product.cost?.[0]?.value} /> {product.cost?.[0]?.asset}
        {product.cost?.[1] ? ' / ' : null}
        <NumberComponent value={product.cost?.[1]?.value} /> {product.cost?.[1]?.asset}
      </div>
      <div className={styles.text}>quantity: {product.quantity}</div>
      <ButtonComponent
        className={styles.button}
        tabIndex={!purchasable ? -1 : 0}
        onClick={() => console.log('clicked')}
      >
        purchase
      </ButtonComponent>
    </div>
  );
};
