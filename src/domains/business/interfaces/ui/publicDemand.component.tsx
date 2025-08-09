import { useBusiness } from '@/src/domains/business/interfaces/useBusiness.ts';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const PublicDemandComponent = () => {
  // console.log('PublicDemandComponent');
  const { publicDemand } = useBusiness();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={publicDemand}
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
