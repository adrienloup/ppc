import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { type ChangeEvent, useState } from 'react';

export const ResourcesDComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const [funds, setFunds] = useState('0');
  const [wire, setWire] = useState('0');
  const [trust, setTrust] = useState('0');
  const [cash, setCash] = useState('0');
  const [memory, setMemory] = useState('0');
  const [processor, setProcessor] = useState('0');
  const [operation, setOperation] = useState('0');
  const [creativity, setCreativity] = useState('0');
  const [availableMatter, setAvailableMatter] = useState('0');
  const [swarmGifts, setSwarmGifts] = useState('0');

  const fundsChange = (e: ChangeEvent<HTMLInputElement>) => setFunds(e.target.value);
  const fundsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        funds: parseInt(funds),
      },
    });
    setFunds('0');
  };

  const cashChange = (e: ChangeEvent<HTMLInputElement>) => setCash(e.target.value);
  const cashSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        cash: Number(cash),
        funds: factory.funds - Number(cash),
      },
    });
    setCash('0');
  };

  const wireChange = (e: ChangeEvent<HTMLInputElement>) => setWire(e.target.value);
  const wireSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        wire: parseInt(wire),
      },
    });
    setWire('0');
  };

  const trustChange = (e: ChangeEvent<HTMLInputElement>) => setTrust(e.target.value);
  const trustSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        trust: Math.min(Number(trust), 100),
      },
    });
    setTrust('0');
  };

  const memoryChange = (e: ChangeEvent<HTMLInputElement>) => setMemory(e.target.value);
  const memorySubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        memory: Math.min(Number(memory), 100),
        operationMax: Number(memory) * 700,
      },
    });
    setMemory('0');
  };

  const processorChange = (e: ChangeEvent<HTMLInputElement>) => setProcessor(e.target.value);
  const processorSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        processor: Math.min(Number(processor), 100),
      },
    });
    setProcessor('0');
  };

  const operationChange = (e: ChangeEvent<HTMLInputElement>) => setOperation(e.target.value);
  const operationSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        operation: Math.min(Number(operation), factory.operationMax),
      },
    });
    setOperation('0');
  };

  const creativityChange = (e: ChangeEvent<HTMLInputElement>) => setCreativity(e.target.value);
  const creativitySubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        creativity: Math.min(parseInt(creativity), factory.operationMax * 1.1),
      },
    });
    setCreativity('0');
  };

  const availableMatterChange = (e: ChangeEvent<HTMLInputElement>) => setAvailableMatter(e.target.value);
  const availableMatterSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        availableMatter: parseInt(availableMatter),
      },
    });
    setAvailableMatter('0');
  };

  const swarmGiftsChange = (e: ChangeEvent<HTMLInputElement>) => setSwarmGifts(e.target.value);
  const swarmGiftsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'UPDATE_SWARM_GIFTS',
      swarmGifts: Number(swarmGifts),
    });
    setSwarmGifts('0');
  };

  return (
    <div>
      <form onSubmit={fundsSubmit}>
        <label>funds</label>
        <input
          value={funds}
          onChange={fundsChange}
        />
        <button type="submit">add</button>
        <span>{factory.funds}</span>
      </form>
      <form onSubmit={cashSubmit}>
        <label>cash</label>
        <input
          value={cash}
          onChange={cashChange}
        />
        <button type="submit">add</button>
        <span>{factory.cash}</span>
      </form>
      <form onSubmit={wireSubmit}>
        <label>wire</label>
        <input
          value={wire}
          onChange={wireChange}
        />
        <button type="submit">add</button>
        <span>{factory.wire}</span>
      </form>
      <form onSubmit={trustSubmit}>
        <label>trust</label>
        <input
          value={trust}
          onChange={trustChange}
        />
        <button type="submit">add</button>
        <span>{factory.trust}</span>
      </form>
      <form onSubmit={memorySubmit}>
        <label>memory</label>
        <input
          value={memory}
          onChange={memoryChange}
        />
        <button type="submit">add</button>
        <span>{factory.memory}</span>
      </form>
      <form onSubmit={processorSubmit}>
        <label>processor</label>
        <input
          value={processor}
          onChange={processorChange}
        />
        <button type="submit">add</button>
        <span>{factory.processor}</span>
      </form>
      <form onSubmit={operationSubmit}>
        <label>operation</label>
        <input
          value={operation}
          onChange={operationChange}
        />
        <button type="submit">add</button>
        <span>
          {factory.operation}/{factory.operationMax}
        </span>
      </form>
      <form onSubmit={creativitySubmit}>
        <label>creativity</label>
        <input
          value={creativity}
          onChange={creativityChange}
        />
        <button type="submit">add</button>
        <span>
          {factory.creativity}/{Math.floor(factory.operationMax * 1.2)}
        </span>
      </form>
      <form onSubmit={availableMatterSubmit}>
        <label>availableMatter</label>
        <input
          value={availableMatter}
          onChange={availableMatterChange}
        />
        <button type="submit">add</button>
        <span>{factory.availableMatter}</span>
      </form>
      <form onSubmit={swarmGiftsSubmit}>
        <label>swarmGifts</label>
        <input
          value={swarmGifts}
          onChange={swarmGiftsChange}
        />
        <button type="submit">add</button>
        <span>{factory.swarmGifts}</span>
      </form>
    </div>
  );
};
