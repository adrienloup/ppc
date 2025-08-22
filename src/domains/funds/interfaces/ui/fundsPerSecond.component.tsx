import { useFunds } from '@/src/domains/funds/interfaces/useFunds.ts';
import { useMerch } from '@/src/domains/merchandise/interfaces/useMerch.ts';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const FundsPerSecondComponent = () => {
  const { fundsPerSecond } = useFunds();
  const { fundsAvailablePerSecond } = useMerch();

  if (!fundsAvailablePerSecond.unlocked) return null;

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={fundsPerSecond}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="funds per second"
        />
      </DialComponent>
    </DialsComponent>
  );
};
