import { NumberComponent } from '@/src/common/components/number/NumberComponent.tsx';
import type { Dial } from '@/src/common/components/dial/Dial.ts';
import styles from '@/src/common/components/dial/DialComponent.module.scss';

export const DialComponent = ({ label, value, tile, unit, styleProp }: Dial) => {
  return (
    <div
      className={styles.dial}
      style={styleProp}
    >
      <NumberComponent
        className={styles.value}
        value={value}
        unit={unit}
      />
      {tile}
      <span className={styles.label}>{label}</span>
    </div>
  );
};
