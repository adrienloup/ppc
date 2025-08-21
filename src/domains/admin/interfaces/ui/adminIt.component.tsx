import { type ChangeEvent, useState } from 'react';
import { useIT, useITDispatch } from '@/src/domains/it/interfaces/useIT.ts';

export const AdminITComponent = () => {
  const dispatch = useITDispatch();
  const state = useIT();
  const [trust, setTrust] = useState(0);

  const trustChange = (e: ChangeEvent<HTMLInputElement>) => setTrust(parseInt(e.target.value));
  const trustSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'LOAD',
      it: {
        ...state,
        trust: Math.min(trust, 100),
      },
    });
    setTrust(0);
  };

  return (
    <form onSubmit={trustSubmit}>
      <span>trust = {state.trust}</span>
      <div>
        <input
          type="text"
          name="int-trust-input"
          value={trust}
          onChange={trustChange}
        />
        <button type="submit">add</button>
      </div>
    </form>
  );
};
