import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const PowerConsumptionComponent = () => {
  // console.log('PowerConsumptionComponent');
  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          // value={consumption}
          value={0}
        />
        <LabelComponent
          className={styles.label}
          label="consumption"
        />
      </DialComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          // value={consumption}
          value={0}
        />
        <LabelComponent
          className={styles.label}
          label="clip factory consumption"
        />
        <BadgeComponent
          className={styles.warning}
          status="warning"
          label="consumption"
        />
      </DialComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          // value={consumption}
          value={0}
        />
        <LabelComponent
          className={styles.label}
          label="drone consumption"
        />
        <BadgeComponent
          className={styles.warning}
          status="warning"
          label="consumption"
        />
      </DialComponent>
    </DialsComponent>
  );
};
