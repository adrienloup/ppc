import { useFactory } from '@/src/domains/factory/interfaces/useFactory.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { TitleComponent } from '@/src/shared/ui/title/title.component';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import type { Product } from '@/src/domains/factory/domain/product.type.ts';
import styles from '@/src/domains/factory/interfaces/ui/shop/stock/product/product.module.scss';

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
      {product.cost?.[0] ? (
        <div className={styles.text}>
          cost: <NumberComponent value={product.cost?.[0]?.value} /> {product.cost?.[0]?.asset}
        </div>
      ) : null}
      {product.cost?.[1] ? (
        <div className={styles.text}>
          cost: <NumberComponent value={product.cost?.[1]?.value} /> {product.cost?.[1]?.asset}
        </div>
      ) : null}
      <div className={styles.text}>quantity: {product.quantity}</div>
      <ButtonComponent
        className={styles.button}
        tabIndex={!purchasable ? -1 : 0}
        onClick={() => console.log('clicked')}
      >
        get it
      </ButtonComponent>
    </div>
  );
};
