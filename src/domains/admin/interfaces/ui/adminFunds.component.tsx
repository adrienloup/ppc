import { type ChangeEvent, useState } from 'react';
import { useFunds, useFundsDispatch } from '@/src/domains/funds/interfaces/useFunds.ts';

export const AdminFundsComponent = () => {
  const dispatch = useFundsDispatch();
  const state = useFunds();
  const [funds, setFunds] = useState(0);

  const fundsChange = (e: ChangeEvent<HTMLInputElement>) => setFunds(parseInt(e.target.value));
  const fundsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'LOAD',
      funds: {
        ...state,
        funds: funds,
      },
    });
    setFunds(0);
  };

  return (
    <form onSubmit={fundsSubmit}>
      <span>funds = {state.funds}</span>
      <div>
        <input
          type="text"
          name="int-funds-input"
          value={funds}
          onChange={fundsChange}
        />
        <button type="submit">add</button>
      </div>
    </form>
  );
};
