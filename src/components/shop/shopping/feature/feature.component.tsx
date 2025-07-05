import { useFactory } from '@/src/features/factory/useFactory.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { TitleComponent } from '@/src/components/title/title.component';
import { ButtonComponent } from '@/src/components/button/button.component.tsx';
import { NumberComponent } from '@/src/components/number/number.component.tsx';
import type { Feature } from '@/src/features/factory/factory.type.ts';
import styles from '@/src/components/shop/shopping/feature/feature.module.scss';

export const FeatureComponent = ({ featureName, featureValue }: { featureName: string; featureValue: Feature }) => {
  const state = useFactory();

  const isPurchasable = featureValue.cost?.every(({ asset, value }) => {
    const available = state[asset] ?? 0;
    return available >= value;
  });

  return (
    <div className={classNames([styles.feature, !featureValue.active ? styles.disabled : ''])}>
      <TitleComponent
        tag="h3"
        className={styles.title}
      >
        {featureName}
      </TitleComponent>
      <div className={styles.text}>text</div>
      <div className={styles.text}>
        cost: <NumberComponent value={featureValue.cost?.[0]?.value} /> {featureValue.cost?.[0]?.asset}
        {featureValue.cost?.[1] ? ' / ' : null}
        <NumberComponent value={featureValue.cost?.[1]?.value} /> {featureValue.cost?.[1]?.asset}
      </div>
      <div className={styles.text}>quantity {featureValue.quantity}</div>
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
