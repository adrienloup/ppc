import { useBusiness } from '@/src/domains/business/interfaces/useBusiness.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const FundsComponent = () => {
  console.log('FundsComponent');
  const { funds } = useBusiness();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={funds}
          asset="currency"
          decimal
        />
        <LabelComponent
          className={styles.label}
          label="available funds"
        />
      </DialComponent>
    </DialsComponent>
  );
};
