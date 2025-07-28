import { type ChangeEvent, useState } from 'react';
import { useSale, useSaleDispatch } from '@/src/domains/sale/interfaces/useSale.ts';

export const DebugSaleComponent = () => {
  const dispatch = useSaleDispatch();
  const state = useSale();
  const [funds, setFunds] = useState('0');

  const fundsChange = (e: ChangeEvent<HTMLInputElement>) => setFunds(e.target.value);
  const fundsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'LOAD',
      state: {
        ...state,
        funds: parseInt(funds),
      },
    });
  };

  const updateUnsoldInventoryBonus = (bonus: number) => dispatch({ type: 'UNSOLD_INVENTORY_BONUS', bonus });

  return (
    <>
      <form onSubmit={fundsSubmit}>
        <span>funds = {state.funds}</span>
        <div>
          <input
            value={funds}
            onChange={fundsChange}
          />
          <button type="submit">Add</button>
        </div>
      </form>
      <form>
        <span>unsoldInventoryBonus = {state.unsoldInventoryBonus}</span>
        <div>
          <button
            type="button"
            onClick={() => updateUnsoldInventoryBonus(0)}
          >
            0
          </button>
          <button
            type="button"
            onClick={() => updateUnsoldInventoryBonus(2)}
          >
            2
          </button>
          <button
            type="button"
            onClick={() => updateUnsoldInventoryBonus(10)}
          >
            10
          </button>
          <button
            type="button"
            onClick={() => updateUnsoldInventoryBonus(5e2)}
          >
            5e2
          </button>
        </div>
      </form>
    </>
  );
};
