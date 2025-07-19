import { useSale } from '@/src/domains/sale/interfaces/useSale.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/dashboard/dashboard.module.scss';

export const FundsComponent = () => {
  console.log('FundsComponent');
  const { funds } = useSale();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={funds}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="available funds"
        />
      </DialComponent>
    </DialsComponent>
  );
};
