import { type ChangeEvent, useState } from 'react';
import { useIntel, useIntelDispatch } from '@/src/domains/intelligence/interfaces/useIntel.ts';

export const DebugIntComponent = () => {
  const dispatch = useIntelDispatch();
  const state = useIntel();
  const [trust, setTrust] = useState('0');

  const trustChange = (e: ChangeEvent<HTMLInputElement>) => setTrust(e.target.value);
  const trustSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'LOAD',
      intelligence: {
        ...state,
        trust: parseInt(trust),
      },
    });
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
