import { useTranslation } from 'react-i18next';
import { useMerc } from '@/src/domains/merchandising/interfaces/useMerc.ts';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { ValueComponent } from '@/src/shared/ui/value/value.component.tsx';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';
import styles from '@/src/domains/merchandising/interfaces/ui/store/store.module.scss';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';

export const MerchandiseComponent = () => {
  console.log('MerchandiseComponent');
  const { t } = useTranslation();
  const merchandise = useMerc();

  const groupedByCategory = Object.entries(merchandise).reduce(
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
    {} as Record<string, typeof merchandise>
  );

  return Object.entries(groupedByCategory).map(([category, merc]) => (
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
      {Object.keys(merc).length > 0 ? (
        Object.entries(merc).map(([mercName, mercValue]) => (
          <DialsComponent
            key={mercName}
            className={styles.dials}
          >
            <DialComponent className={styles.dial}>
              <TitleComponent
                className={styles.subtitle}
                tag="h3"
              >
                {t(`store.${mercName}.title`)}
              </TitleComponent>
              <LabelComponent
                className={styles.label}
                label="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              />
              <div className={styles.group}>
                <LabelComponent
                  className={styles.label}
                  label="cost:"
                />
                <NumberComponent
                  className={styles.value}
                  value={mercValue.cost?.value}
                />
                <LabelComponent
                  className={styles.label}
                  label={mercValue.cost?.asset}
                />
              </div>
              <div className={styles.group}>
                <LabelComponent
                  className={styles.label}
                  label="quantity:"
                />
                <ValueComponent
                  className={styles.value}
                  value={mercValue.quantity}
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
