import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const SwarmDeliveryComponent = () => {
  // console.log('SwarmDeliveryComponent');

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={0}
        />
        <LabelComponent
          className={styles.label}
          label={`swarm gifts in 0 seconds`}
          // label={`swarm gift in ${(swarmGiftsInterval / 1000).toFixed()} seconds`}
        />
      </DialComponent>
    </DialsComponent>
  );
};
