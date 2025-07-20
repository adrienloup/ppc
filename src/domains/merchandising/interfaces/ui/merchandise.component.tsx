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

export const MerchandiseComponent = () => {
  console.log('MerchandiseComponent');
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
        <div className={styles.inner}>{category}</div>
      </TitleComponent>
      {Object.keys(merc).length > 0 ? (
        Object.entries(merc).map(([name, merc]) => (
          <DialsComponent
            key={name}
            className={styles.dials}
          >
            <DialComponent>
              <TitleComponent
                className={styles.subtitle}
                tag="h3"
              >
                {name}
              </TitleComponent>
              <LabelComponent
                className={styles.label}
                label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's"
              />
              <ValueComponent
                className={styles.value}
                value={merc.cost?.value}
              />
              <LabelComponent
                className={styles.label}
                label={merc.cost?.asset}
              />
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
