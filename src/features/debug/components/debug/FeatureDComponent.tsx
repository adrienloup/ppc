import {
  useFactory,
  useFactoryDispatch,
} from '@/src/features/factory/infrastructure/useFactory.ts';
import { FEATURE_STATE } from '@/src/features/factory/infrastructure/featureState.ts';

export const FeatureDComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

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
    <>
      <div>
        features
        <button
          type="submit"
          onClick={featureRestart}
        >
          init
        </button>
      </div>
      <div>
        {Object.entries(factory.feature).map(([key, value]) => (
          <div key={key}>
            {key}
            {value.enabled ? <span>enabled</span> : <span style={{ opacity: '0.5' }}>enabled</span>}
            {value.actived ? <span>actived</span> : <span style={{ opacity: '0.5' }}>actived</span>}
          </div>
        ))}
      </div>
    </>
  );
};
