import { useTrade } from '@/src/domains/trade/interfaces/useTrade.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
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
      {Object.entries(wallet).map(([symbol, token]) => (
        <DialComponent key={symbol}>
          <NumberComponent
            className={styles.value}
            value={token.quantity}
          />
          <LabelComponent
            className={styles.label}
            label={`${token.name} wallet`}
          />
          <div className={styles.buttons}>
            <ClickerComponent
              className={styles.button}
              prefix="-"
              value={0.1}
              disabled={token.quantity < 1}
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
          label="thune"
        />
        <div className={styles.buttons}>
          <ClickerComponent
            className={styles.button}
            prefix="-"
            value={100}
            // disabled={token.quantity < 1}
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
          <ButtonComponent
            className={styles.button}
            // disabled={funds < clipperCost || shutdown}
            onClick={() => console.log('withdraw')}
          >
            withdraw
          </ButtonComponent>
        </div>
      </DialComponent>
    </DialsComponent>
  );
};
