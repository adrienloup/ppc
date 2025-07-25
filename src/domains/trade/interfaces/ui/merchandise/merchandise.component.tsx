import { Trans, useTranslation } from 'react-i18next';
import { useTrade } from '@/src/domains/trade/interfaces/useTrade.ts';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';
import styles from '@/src/domains/trade/interfaces/ui/merchandise/merchandise.module.scss';

export const MerchandiseComponent = () => {
  // console.log('MerchandiseComponent');
  const { t } = useTranslation();
  const trade = useTrade();

  const byCategory = Object.entries(trade).reduce(
    (acc, [key, value]) => {
      const category = value.category;
      if (!acc[category!]) {
        acc[category!] = {};
      }
      if (value.available) {
        acc[category!][key] = value;
      }
      return acc;
    },
    {} as Record<string, typeof trade>
  );

  return Object.entries(byCategory).map(([category, merchandise]) => (
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
      {Object.keys(merchandise).length > 0 ? (
        Object.entries(merchandise).map(([key, value]) => (
          <DialsComponent
            key={key}
            className={styles.dials}
          >
            <DialComponent className={styles.dial}>
              <TitleComponent
                className={styles.subtitle}
                tag="h3"
              >
                {t(`store.${key}.title`)}
              </TitleComponent>
              <div className={styles.label}>
                <Trans
                  i18nKey={`store.${key}.effect`}
                  components={{
                    firstEffect: (
                      <>
                        {Array.isArray(value.effect) &&
                        value.effect.every((r) => typeof r === 'object') ? (
                          <NumberComponent value={value.effect?.[0]?.value} />
                        ) : null}
                      </>
                    ),
                    secondEffect: (
                      <>
                        {Array.isArray(value.effect) &&
                        value.effect.every((r) => typeof r === 'object') ? (
                          <NumberComponent value={value.effect?.[1]?.value} />
                        ) : null}
                      </>
                    ),
                  }}
                />
              </div>
              <div className={styles.label}>
                <Trans
                  i18nKey={`store.${key}.cost`}
                  components={{
                    cost: <NumberComponent value={value.cost?.value} />,
                  }}
                />
              </div>
              <div className={styles.label}>
                <Trans
                  i18nKey={`store.${key}.quantity`}
                  components={{
                    quantity: <NumberComponent value={value.quantity!} />,
                  }}
                />
              </div>
              <ButtonComponent
                className={styles.button}
                onClick={() => console.log('clicked')}
              >
                purchase
              </ButtonComponent>
            </DialComponent>
          </DialsComponent>
        ))
      ) : (
        <EmptyComponent />
      )}
    </CardComponent>
  ));
};
