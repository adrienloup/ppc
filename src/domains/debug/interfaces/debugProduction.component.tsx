import { type ChangeEvent, useState } from 'react';
import { useFactoryDispatch } from '@/src/domains/factory/interfaces/useFactory.ts';
import type { FactoryState } from '@/src/domains/factory/domain/factoryState.type.ts';

export const DebugProductionComponent = ({ factory }: { factory: FactoryState }) => {
  const dispatch = useFactoryDispatch();
  const [clip, setClip] = useState('0');

  const clipChange = (e: ChangeEvent<HTMLInputElement>) => setClip(e.target.value);
  const clipSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'INITIALIZE',
      state: {
        ...factory,
        clip: parseInt(clip),
      },
    });
  };

  return (
    <form onSubmit={clipSubmit}>
      <span>clip = {factory.clip}</span>
      <div>
        <input
          type="text"
          name="factory-clip-input"
          value={clip}
          onChange={clipChange}
        />
        <button type="submit">add</button>
      </div>
    </form>
  );
};
