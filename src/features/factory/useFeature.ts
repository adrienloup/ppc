import { useEffect } from 'react';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/useFactory.ts';
import { useNotif } from '@/src/features/notification/useNotif.ts';

export const useFeature = () => {
  const setFactory = useFactoryDispatch();
  const factory = useFactory();
  const [, setNotif] = useNotif();

  useEffect(() => {
    const features = Object.entries(factory.feature);

    for (let i = 0; i < features.length; i++) {
      const [feature, value] = features[i];

      if (value.available) continue;

      const requirements = value.requirements;
      let available: boolean = value.available ?? false;

      if (Array.isArray(requirements) && requirements.every((requirement) => typeof requirement === 'object')) {
        requirements.forEach((requirement) => {
          const { asset, value } = requirement;
          available = factory[asset] >= value;
        });
      }

      if (available) {
        setFactory({ type: 'UPDATE_FEATURE', feature, available });
        setNotif({ type: 'ADD_NOTIF', notif: { id: feature, text: `${feature} feature is unlocked` } });
        console.info(`${feature} feature is unlocked`);
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
    // factory.processor,
    factory.operation,
    factory.creativity,
    // factory.harvesterDrone,
    // factory.wireDrone,
    factory.yomi,
  ]);
};
