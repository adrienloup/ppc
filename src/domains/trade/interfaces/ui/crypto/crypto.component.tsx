// import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Crypto } from '@/src/domains/trade/domain/crypto.type.ts';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/trade/interfaces/ui/crypto/crypto.module.scss';

export const CryptoComponent = ({ name, price, change }: Crypto) => {
  // console.log('CryptoComponent');
  return (
    <DialsComponent>
      <DialComponent className={styles.dial}>
        <NumberComponent
          className={styles.value}
          value={price}
          asset="currency"
        />
        <span className={styles.variation}>
          {/*<span className={classNames([styles.variation, change >= 0 ? styles.positive : styles.negative])}>*/}
          {change > 0 ? '+' : '-'}
          <NumberComponent
            value={Math.abs(change)}
            decimal
          />
        </span>
        <LabelComponent
          className={styles.label}
          label={name}
        />
      </DialComponent>
    </DialsComponent>
  );
};
