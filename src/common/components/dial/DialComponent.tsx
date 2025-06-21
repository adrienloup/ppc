import type { Dial } from '@/src/common/components/dial/Dial.ts';
import styles from '@/src/common/components/dial/DialComponent.module.scss';

export const DialComponent = ({ label, value, styleCss }: Dial) => {
  return (
    <div
      className={styles.dial}
      style={styleCss}
    >
      {value && <span className={styles.value}>{value}</span>}
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};
