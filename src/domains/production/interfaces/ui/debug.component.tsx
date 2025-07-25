import { type ChangeEvent, useState } from 'react';
import { useProd, useProdDispatch } from '@/src/domains/production/interfaces/useProd.ts';

export const DebugProdComponent = () => {
  const dispatch = useProdDispatch();
  const state = useProd();
  const [clip, setClip] = useState('0');

  const clipChange = (e: ChangeEvent<HTMLInputElement>) => setClip(e.target.value);
  const clipSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'LOAD',
      production: {
        ...state,
        clip: parseInt(clip),
      },
    });
  };

  return (
    <form onSubmit={clipSubmit}>
      <span>clip = {state.clip}</span>
      <div>
        <input
          type="text"
          name="prod-clip-input"
          value={clip}
          onChange={clipChange}
        />
        <button type="submit">add</button>
      </div>
    </form>
  );
};
