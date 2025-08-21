import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import type { Crypto } from '@/src/domains/exchange/domain/crypto.type.ts';
import styles from '@/src/domains/exchange/interfaces/ui/crypto/crypto.module.scss';

export const CryptoComponent = ({ name, price, volume, change }: Crypto) => {
  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={price}
          asset="currency"
        />
        <span className={styles.variation}>
          {change > 0 ? '+' : '-'}
          <NumberComponent value={Math.abs(change)} />
        </span>
        <LabelComponent
          className={styles.label}
          label={`${name} price`}
        />
      </DialComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={volume}
        />
        <LabelComponent
          className={styles.label}
          label={`${name} volume`}
        />
      </DialComponent>
    </DialsComponent>
  );
};
