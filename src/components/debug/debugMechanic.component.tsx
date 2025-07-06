import { type ChangeEvent, useState } from 'react';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/useFactory.ts';

export const DebugMechanicComponent = () => {
  const state = useFactory();
  const dispatch = useFactoryDispatch();
  const [clip, setClip] = useState('0');

  const clipChange = (e: ChangeEvent<HTMLInputElement>) => setClip(e.target.value);
  const clipSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'INITIALIZE',
      state: {
        ...state,
        clip: parseInt(clip),
      },
    });
  };

  return (
    <form onSubmit={clipSubmit}>
      <input
        value={clip}
        onChange={clipChange}
      />
      <button type="submit">clip</button>
    </form>
  );
};
