import { classNames } from '@/src/shared/utils/classNames.ts';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import type { Crypto } from '@/src/domains/trade/domain/crypto.type.ts';
import styles from '@/src/domains/trade/interfaces/ui/crypto/crypto.module.scss';

export const CryptoComponent = ({ name, price, change }: Crypto) => {
  // console.log('CryptoComponent');
  return (
    <div className={styles.crypto}>
      <div className={styles.price}>
        <NumberComponent
          className={styles.value}
          value={price}
          asset="currency"
        />
      </div>
      <div className={classNames([styles.variation, change >= 0 ? styles.positive : styles.negative])}>
        {change > 0 ? '+' : '-'}
        <NumberComponent
          value={Math.abs(change)}
          decimal
        />
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};
