import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { FACTORY_STATE } from '@/src/features/factory/infrastructure/factoryState.ts';
import { FEATURE_STATE } from '@/src/features/factory/infrastructure/featureState.ts';

export const InitializeDComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const factoryRestart = () => {
    setFactory({
      type: 'INITIALIZE',
      state: FACTORY_STATE,
    });
  };

  const featureRestart = () => {
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        feature: FEATURE_STATE,
      },
    });
  };

  return (
    <div>
      factory
      <button
        type="submit"
        onClick={factoryRestart}
      >
        init
      </button>
      features
      <button
        type="submit"
        onClick={featureRestart}
      >
        init
      </button>
    </div>
  );
};
