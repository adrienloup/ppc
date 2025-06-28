import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';

export const FeatureDComponent = () => {
  const factory = useFactory();

  return (
    <div>
      {Object.entries(factory.feature).map(([key, value]) => (
        <div key={key}>
          {key}
          {value.enabled ? <span>enabled</span> : <span style={{ opacity: '0.5' }}>enabled</span>}
          {value.actived ? <span>actived</span> : <span style={{ opacity: '0.5' }}>actived</span>}
        </div>
      ))}
    </div>
  );
};
