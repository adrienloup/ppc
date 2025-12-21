import { useBusiness } from '@/src/domains/business/interface/useBusiness.ts';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { GroupComponent } from '@/src/shared/ui/group/group.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { TagComponent } from '@/src/shared/ui/tag/tag.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { ValueComponent } from '@/src/shared/ui/value/value.component.tsx';
import styles from '@/src/domains/factory/ui/business/business.module.scss';

export const BusinessComponent = () => {
  const { funds, inventory } = useBusiness();

  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        business
      </TitleComponent>
      <DialsComponent className={styles.dials}>
        <DialComponent>
          <ValueComponent>${funds.quantity.toFixed(2)}</ValueComponent>
          <LabelComponent>available funds</LabelComponent>
        </DialComponent>
      </DialsComponent>
      <DialsComponent className={styles.dials}>
        <DialComponent>
          <GroupComponent>
            <ValueComponent>{inventory.quantity}</ValueComponent>
            {inventory.bonus ? <TagComponent color="green">x{inventory.bonus}</TagComponent> : null}
          </GroupComponent>
          <LabelComponent>unsold inventory</LabelComponent>
        </DialComponent>
      </DialsComponent>
      <DialsComponent className={styles.dials}>
        <DialComponent>
          <ValueComponent>A</ValueComponent>
          <LabelComponent>A</LabelComponent>
          <ClickerComponent
            className={styles.button}
            prefix="+"
            value={1}
            onClick={() => console.log('onClick')}
          >
            +1
          </ClickerComponent>
        </DialComponent>
      </DialsComponent>
    </CardComponent>
  );
};
