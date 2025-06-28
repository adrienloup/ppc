import {
  useFactory,
  useFactoryDispatch,
} from '@/src/features/factory/infrastructure/useFactory.ts';
import { type ChangeEvent, useState } from 'react';

export const MechanicDComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const [clip, setClip] = useState('0');
  const [creativity, setCreativity] = useState('0');

  const clipChange = (e: ChangeEvent<HTMLInputElement>) => setClip(e.target.value);
  const clipSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        clip: parseInt(clip),
      },
    });
    setClip('0');
  };

  const creativityChange = (e: ChangeEvent<HTMLInputElement>) => setCreativity(e.target.value);
  const creativitySubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        creativity: Math.min(parseInt(creativity), 1e5),
      },
    });
    setCreativity('0');
  };

  return (
    <div>
      <form onSubmit={clipSubmit}>
        <label>clip</label>
        <input
          value={clip}
          onChange={clipChange}
        />
        <button type="submit">add</button>
        <span>{factory.clip}</span>
      </form>
      <form onSubmit={creativitySubmit}>
        <label>creativity</label>
        <input
          value={creativity}
          onChange={creativityChange}
        />
        <button type="submit">add</button>
        <span>{factory.creativity}</span>
      </form>
    </div>
  );
};
