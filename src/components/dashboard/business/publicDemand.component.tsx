import { useFactory } from '@/src/features/factory/useFactory.ts';
import { DialsComponent } from '@/src/components/common/dials/dials.component.tsx';
import { DialComponent } from '@/src/components/common/dial/dial.component.tsx';
import { NumberComponent } from '@/src/components/common/number/number.component.tsx';
import { LabelComponent } from '@/src/components/common/label/label.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const PublicDemandComponent = () => {
  const factory = useFactory();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.publicDemand}
          asset="percent"
        />
        <LabelComponent
          className={styles.label}
          label="public demand"
        />
      </DialComponent>
    </DialsComponent>
  );
};
