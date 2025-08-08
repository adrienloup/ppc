import { useFunds } from '@/src/domains/funds/interfaces/useFunds.ts';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const FundsComponent = () => {
  console.log('FundsComponent');
  const { funds } = useFunds();

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
