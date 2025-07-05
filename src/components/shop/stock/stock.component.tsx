import { useFactory } from '@/src/features/factory/useFactory.ts';
import { CardsComponent } from '@/src/components/cards/cards.component.tsx';
import { CardComponent } from '@/src/components/card/card.component.tsx';
import { TitleComponent } from '@/src/components/title/title.component.tsx';
import { FeatureComponent } from '@/src/components/shop/stock/feature/feature.component.tsx';
import type { FeatureState } from '@/src/features/factory/factory.type.ts';
import styles from '@/src/components/shop/stock/stock.module.scss';

type FeatureByCategory = Record<
  string,
  {
    available: Partial<FeatureState>;
    consumed: number;
    total: number;
  }
>;

export const StockComponent = () => {
  const { feature } = useFactory();

  const featureByCategory = Object.entries(feature).reduce<FeatureByCategory>((acc, [key, value]) => {
    if (!('category' in value) || !value.category) return acc;

    const category = value.category;

    if (!acc[category]) {
      acc[category] = {
        available: {},
        consumed: 0,
        total: 0,
      };
    }

    acc[category].total++;

    if (value.available) {
      acc[category].available[key] = value;
    } else if (value.active) {
      acc[category].consumed++;
    }

    return acc;
  }, {});

  return (
    <CardsComponent className={styles.cards}>
      {Object.entries(featureByCategory).map(([category, feature]) => (
        <CardComponent
          key={category}
          className={styles.card}
        >
          <TitleComponent
            className={styles.title}
            tag="h2"
          >
            {category} {`(${Object.keys(feature.available).length}/${feature.total})`}
            {/*{category} {`(${Object.keys(feature.available).length}) (${feature.consumed}/${feature.total})`}*/}
          </TitleComponent>
          {Object.keys(feature.available).length > 0
            ? Object.entries(feature.available).map(([featureName, featureValue]) => (
                <FeatureComponent
                  key={featureName}
                  featureName={featureName}
                  featureValue={featureValue!}
                />
              ))
            : 'empty'}
        </CardComponent>
      ))}
    </CardsComponent>
  );
};
