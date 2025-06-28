import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { type ChangeEvent, useState } from 'react';

export const MechanicDComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const [clip, setClip] = useState('0');
  const [clipper, setClipper] = useState('0');
  const [megaClipper, setMegaClipper] = useState('0');
  const [harvesterDrone, setHarvesterDrone] = useState('0');
  const [wireDrone, setWireDrone] = useState('0');

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

  const clipperChange = (e: ChangeEvent<HTMLInputElement>) => setClipper(e.target.value);
  const clipperSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        clipper: parseInt(clipper),
      },
    });
    setClipper('0');
  };

  const megaClipperChange = (e: ChangeEvent<HTMLInputElement>) => setMegaClipper(e.target.value);
  const megaClipperSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        megaClipper: parseInt(megaClipper),
      },
    });
    setMegaClipper('0');
  };

  const harvesterDroneChange = (e: ChangeEvent<HTMLInputElement>) => setHarvesterDrone(e.target.value);
  const harvesterDroneSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        harvesterDrone: Number(harvesterDrone),
      },
    });
    setHarvesterDrone('0');
  };

  const wireDroneChange = (e: ChangeEvent<HTMLInputElement>) => setWireDrone(e.target.value);
  const wireDroneSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        wireDrone: Number(wireDrone),
      },
    });
    setWireDrone('0');
  };

  return (
    <div style={{ paddingRight: '4rem' }}>
      <form onSubmit={clipSubmit}>
        <label>clip</label>
        <input
          value={clip}
          onChange={clipChange}
        />
        <button type="submit">add</button>
        <span>{factory.clip}</span>
      </form>
      <form onSubmit={clipperSubmit}>
        <label>clipper</label>
        <input
          value={clipper}
          onChange={clipperChange}
        />
        <button type="submit">add</button>
        <span>{factory.clipper}</span>
      </form>
      <form onSubmit={megaClipperSubmit}>
        <label>megaClipper</label>
        <input
          value={megaClipper}
          onChange={megaClipperChange}
        />
        <button type="submit">add</button>
        <span>{factory.megaClipper}</span>
      </form>
      <form onSubmit={harvesterDroneSubmit}>
        <label>harvesterDrone</label>
        <input
          value={harvesterDrone}
          onChange={harvesterDroneChange}
        />
        <button type="submit">add</button>
        <span>{factory.harvesterDrone}</span>
      </form>
      <form onSubmit={wireDroneSubmit}>
        <label>wireDrone</label>
        <input
          value={wireDrone}
          onChange={wireDroneChange}
        />
        <button type="submit">add</button>
        <span>{factory.wireDrone}</span>
      </form>
    </div>
  );
};
