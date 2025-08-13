import { Trans, useTranslation } from 'react-i18next';
import { useFunds } from '@/src/domains/funds/interfaces/useFunds.ts';
import { useIT } from '@/src/domains/it/interfaces/useIT.ts';
import { useMerch } from '@/src/domains/merchandise/interfaces/useMerch.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/domains/factory/interfaces/ui/store/store.module.scss';

export const MerchandiseComponent = () => {
  const { t } = useTranslation();
  const merch = useMerch();
  const { creativity, operation, trust } = useIT();
  const { funds } = useFunds();

  const groupByCategory = Object.entries(merch).reduce(
    (acc, [key, value]) => {
      const category = value.category;
      if (!acc[category!]) {
        acc[category!] = {};
      }
      if (value.unlocked) {
        acc[category!][key] = value;
      }
      return acc;
    },
    {} as Record<string, typeof merch>
  );

  const purchase: Record<string, number> = {
    creativity,
    operation,
    funds,
    trust,
  };

  return Object.entries(groupByCategory).map(([, merchandise]) =>
    Object.entries(merchandise).map(([key, value]) => (
      <CardComponent
        key={key}
        className={classNames(styles.card, value.purchased ? styles.purchased : '')}
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
              effect: (
                <>
                  {Array.isArray(value.effect) && value.effect.every((r) => typeof r === 'object') ? (
                    <NumberComponent value={value.effect?.[0]?.value} />
                  ) : null}
                </>
              ),
              kissCoolEffect: (
                <>
                  {Array.isArray(value.effect) && value.effect.every((r) => typeof r === 'object') ? (
                    <NumberComponent value={value.effect?.[1]?.value} />
                  ) : null}
                </>
              ),
            }}
          />
        </span>
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
        <div className={styles.action}>
          <ButtonComponent
            className={styles.button}
            disabled={!(purchase[value.cost.asset] >= value.cost.value && !value.purchased)}
            onClick={() => console.log('clicked')}
          >
            purchase
          </ButtonComponent>
          {purchase[value.cost.asset] < value.cost.value && !value.purchased && (
            <BadgeComponent
              label={t('app.noFunds')}
              status="error"
            />
          )}
          {value.purchased && (
            <BadgeComponent
              label={t('app.soldOut')}
              status="warning"
            />
          )}
        </div>
      </CardComponent>
    ))
  );
};
