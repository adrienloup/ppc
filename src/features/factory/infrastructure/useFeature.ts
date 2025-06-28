import { useEffect } from 'react';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory';
import { useAlertsDispatch } from '@/src/features/notification/infrastructure/useAlerts.ts';

export const useFeature = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const setAlert = useAlertsDispatch();

  useEffect(() => {
    const features = Object.entries(factory.feature);
    console.log('useFeature > features', features);

    for (let i = 0; i < features.length; i++) {
      const [feature, value] = features[i];

      if (value.actived) continue;

      const requirement = value.requirements;
      let enabled = value.enabled ?? false;

      if (Array.isArray(requirement) && requirement.every((r) => typeof r === 'object')) {
        requirement.forEach((r) => {
          const { unit, value } = r;
          enabled = factory[unit] >= value;
        });
      }

      if (enabled) {
        setFactory({ type: 'UPDATE_FEATURE', feature: feature, actived: true, enabled: enabled });
        setAlert({ type: 'ADD_ALERT', alert: { id: feature, text: `${feature} unlocked` } });
        console.info(`Feature: ${feature} unlocked`);
      }
    }
  }, [
    factory.feature,
    factory.clip,
    factory.funds,
    factory.wire,
    factory.clipper,
    factory.clipFactory,
    factory.trust,
    factory.processor,
    factory.operation,
    factory.creativity,
    factory.harvesterDrone,
    factory.wireDrone,
    factory.yomi,
    setFactory,
  ]);
};
