import { useTrade } from '@/src/domains/trade/interfaces/useTrade.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const WalletComponent = () => {
  const { wallet } = useTrade();

  return (
    <DialsComponent>
      {Object.entries(wallet).map(([symbol, crypto]) => (
        <DialComponent key={symbol}>
          <NumberComponent
            className={styles.value}
            value={crypto.quantity}
          />
          <LabelComponent
            className={styles.label}
            label={crypto.name}
          />
          <div className={styles.action}>
            <ClickerComponent
              className={styles.button}
              prefix="-"
              value={0.1}
              disabled={crypto.quantity < 1}
              onClick={() => console.log('decrease')}
            >
              -
            </ClickerComponent>
            <ClickerComponent
              className={styles.button}
              prefix="+"
              value={0.1}
              // disabled={funds < clipperCost || shutdown}
              onClick={() => console.log('increase')}
            >
              +
            </ClickerComponent>
          </div>
        </DialComponent>
      ))}
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={0}
        />
        <LabelComponent
          className={styles.label}
          label="cash wallet"
        />
        <div className={styles.action}>
          <ClickerComponent
            className={styles.button}
            prefix="-"
            value={100}
            // disabled={crypto.quantity < 1}
            onClick={() => console.log('decrease')}
          >
            -
          </ClickerComponent>
          <ClickerComponent
            className={styles.button}
            prefix="+"
            value={100}
            // disabled={funds < clipperCost || shutdown}
            onClick={() => console.log('increase')}
          >
            +
          </ClickerComponent>
          <BadgeComponent value={100} />
        </div>
      </DialComponent>
    </DialsComponent>
  );
};
