import { useFactory } from '@/src/features/factory/useFactory.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { TitleComponent } from '@/src/components/title/title.component';
import { ButtonComponent } from '@/src/components/button/button.component.tsx';
import { NumberComponent } from '@/src/components/number/number.component.tsx';
import type { Product } from '@/src/features/factory/factory.type.ts';
import styles from '@/src/components/shop/stock/product/product.module.scss';

export const ProductComponent = ({ productName, productValue }: { productName: string; productValue: Product }) => {
  const state = useFactory();

  const isPurchasable = productValue.cost?.every(({ asset, value }) => {
    const available = state[asset] ?? 0;
    return available >= value;
  });

  return (
    <div className={classNames([styles.product, !productValue.active ? styles.disabled : ''])}>
      <TitleComponent
        tag="h3"
        className={styles.title}
      >
        {productName}
      </TitleComponent>
      <div className={styles.text}>text</div>
      <div className={styles.text}>
        cost: <NumberComponent value={productValue.cost?.[0]?.value} /> {productValue.cost?.[0]?.asset}
        {productValue.cost?.[1] ? ' / ' : null}
        <NumberComponent value={productValue.cost?.[1]?.value} /> {productValue.cost?.[1]?.asset}
      </div>
      <div className={styles.text}>quantity {productValue.quantity}</div>
      <ButtonComponent
        className={classNames([styles.button, !isPurchasable ? styles.disabled : ''])}
        tabIndex={!isPurchasable ? -1 : 0}
        onClick={() => console.log('clicked')}
      >
        purchase
      </ButtonComponent>
    </div>
  );
};
