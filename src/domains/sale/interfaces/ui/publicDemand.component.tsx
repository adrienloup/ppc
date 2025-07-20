import { useSale } from '@/src/domains/sale/interfaces/useSale.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import styles from '@/src/domains/industry/interfaces/ui/dashboard/dashboard.module.scss';

export const PublicDemandComponent = () => {
  // console.log('PublicDemandComponent');
  const { publicDemand } = useSale();

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
