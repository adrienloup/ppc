import { Trans, useTranslation } from 'react-i18next';
import { useMer } from '@/src/domains/merchandise/interfaces/useMer.ts';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/store/store.module.scss';

export const MerchandiseComponent = () => {
  // console.log('MerchandiseComponent');
  const { t } = useTranslation();
  const mer = useMer();

  const availableByCategory = Object.entries(mer).reduce(
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
    {} as Record<string, typeof mer>
  );

  return Object.entries(availableByCategory).map(([, merchandise]) =>
    Object.entries(merchandise).map(([key, value]) => (
      <CardComponent
        key={key}
        className={styles.card}
      >
        <TitleComponent
          className={styles.title}
          tag="h2"
        >
          {t(`store.${key}.title`)}
        </TitleComponent>
        <span className={styles.text}>
          <Trans
            i18nKey={`store.${key}.effect`}
            components={{
              firstEffect: (
                <>
                  {Array.isArray(value.effect) && value.effect.every((r) => typeof r === 'object') ? (
                    <NumberComponent value={value.effect?.[0]?.value} />
                  ) : null}
                </>
              ),
              secondEffect: (
                <>
                  {Array.isArray(value.effect) && value.effect.every((r) => typeof r === 'object') ? (
                    <NumberComponent value={value.effect?.[1]?.value} />
                  ) : null}
                </>
              ),
            }}
          />
        </span>
        <span className={styles.text}>category: {value.category}</span>
        <span className={styles.text}>
          <Trans
            i18nKey={`store.${key}.cost`}
            components={{
              cost: <NumberComponent value={value.cost?.value} />,
            }}
          />
        </span>
        <span className={styles.text}>
          <Trans
            i18nKey={`store.${key}.quantity`}
            components={{
              quantity: <NumberComponent value={value.quantity!} />,
            }}
          />
        </span>
        <ButtonComponent
          className={styles.button}
          onClick={() => console.log('clicked')}
        >
          purchase
        </ButtonComponent>
      </CardComponent>
    ))
  );
};
