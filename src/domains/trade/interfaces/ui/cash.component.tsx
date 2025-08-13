import { useFunds, useFundsDispatch } from '@/src/domains/funds/interfaces/useFunds.ts';
import { useTrade, useTradeDispatch } from '@/src/domains/trade/interfaces/useTrade.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const CashComponent = () => {
  const tradeDispatch = useTradeDispatch();
  const fundsDispatch = useFundsDispatch();
  const { cash } = useTrade();
  const { funds } = useFunds();

  const CASH_QUANTITY = 1000;

  const increaseCash = () => {
    if (funds < CASH_QUANTITY) return;
    tradeDispatch({ type: 'INCREASE_CASH', cash: CASH_QUANTITY });
    fundsDispatch({ type: 'DECREASE_FUNDS', funds: CASH_QUANTITY });
  };

  const decreaseCash = () => {
    if (cash < CASH_QUANTITY) return;
    tradeDispatch({ type: 'DECREASE_CASH', cash: CASH_QUANTITY });
    fundsDispatch({ type: 'INCREASE_FUNDS', funds: CASH_QUANTITY });
  };

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={cash}
          asset="currency"
          decimal
        />
        <LabelComponent
          className={styles.label}
          label="cash"
        />
        <div className={styles.action}>
          <ClickerComponent
            className={styles.button}
            prefix="-"
            value={CASH_QUANTITY}
            disabled={cash < CASH_QUANTITY}
            onClick={decreaseCash}
          >
            -
          </ClickerComponent>
          <ClickerComponent
            className={styles.button}
            prefix="+"
            value={CASH_QUANTITY}
            disabled={funds < CASH_QUANTITY}
            onClick={increaseCash}
          >
            +
          </ClickerComponent>
          <BadgeComponent value={CASH_QUANTITY} />
        </div>
      </DialComponent>
    </DialsComponent>
  );
};
