import { Trans, useTranslation } from 'react-i18next';
import { useFunds, useFundsDispatch } from '@/src/domains/funds/interfaces/useFunds.ts';
import { useIT } from '@/src/domains/it/interfaces/useIT.ts';
import { useMerch, useMerDispatch } from '@/src/domains/merchandise/interfaces/useMerch.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/domains/factory/interfaces/ui/store/store.module.scss';

export const MerchandiseComponent = () => {
  const merchandiseDispatch = useMerDispatch();
  const fundsDispatch = useFundsDispatch();
  const { t } = useTranslation();
  const { creativity, operation, trust } = useIT();
  const { funds } = useFunds();
  const merch = useMerch();

  const assets: Record<string, number> = {
    funds,
  };

  const groupedByCategory = Object.entries(merch).reduce(
    (acc, [key, value]) => {
      if (!('category' in value)) return acc;
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

  const buyMerchandise = (name: string) => {
    const merchandise = merch[name];

    if (!merchandise || merchandise.quantity === 0) {
      console.info(`Merchandise: you cannot buy ${name}`);
      return;
    }

    if (merchandise.cost) {
      const { asset, value } = merchandise.cost;
      const canBuy = assets[asset] >= value;

      if (!canBuy) {
        console.info(`Merchandise: not enough resources to buy ${name}`);
        return;
      }

      const funds = (assets[asset] ?? 0) - value;
      console.log('funds', funds);
      fundsDispatch({ type: 'DECREASE_FUNDS', funds });
      // fundsDispatch({ type: 'DECREASE_FUNDS', cost })
      // decrese more

      if (Array.isArray(merchandise.effect)) {
        if (merchandise.effect.every((e) => typeof e === 'string')) {
          merchandise.effect?.forEach((name) => {
            //       updatedFeatures[f] = {
            //         ...updatedFeatures[f],
            //         enabled: !updatedFeatures[f].enabled,
            //       };
            merchandiseDispatch({ type: 'UNLOCKED_MERCHANDISE', name, unlocked: true });
          });
        } else if (merchandise.effect.every((e) => typeof e === 'object')) {
          merchandise.effect?.forEach(({ asset, value }) => {
            //       updatedState[unit] = (state[unit] ?? 0) + value;
          });
        }
      } else {
        console.info(`Merchandise: ${name} has no effect`);
      }
    }

    merchandiseDispatch({ type: 'BUY_MERCHANDISE', name });
  };

  return Object.entries(groupedByCategory).map(([, merchandise]) =>
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
        {value.cost && (
          <div className={styles.action}>
            <ButtonComponent
              className={styles.button}
              disabled={!(purchase[value.cost.asset] >= value.cost.value && !value.purchased)}
              onClick={() => buyMerchandise(key)}
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
        )}
      </CardComponent>
    ))
  );
};
