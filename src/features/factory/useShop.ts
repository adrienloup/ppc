import { useEffect } from 'react';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/useFactory.ts';
import { useNotif } from '@/src/features/notification/useNotif.ts';

export const useShop = () => {
  const setFactory = useFactoryDispatch();
  const factory = useFactory();
  const [, setNotif] = useNotif();

  useEffect(() => {
    const items = [
      ...Object.entries(factory.product).map(([key, value]) => ({
        name: key,
        data: value,
        model: 'product' as const,
      })),
      ...Object.entries(factory.feature).map(([key, value]) => ({
        name: key,
        data: value,
        model: 'feature' as const,
      })),
    ];

    for (let i = 0; i < items.length; i++) {
      const { name, data, model } = items[i];

      if (data.available) continue;

      const requirements = data.requirements;
      let available: boolean = data.available ?? false;

      if (
        Array.isArray(requirements) &&
        requirements.every((requirement) => typeof requirement === 'object')
      ) {
        requirements.forEach((requirement) => {
          const { asset, value } = requirement;
          available = factory[asset] >= value;
        });
      }

      if (available) {
        setFactory({ type: 'UPDATE_SHOP', name, model, available });
        setNotif({ type: 'ADD_NOTIF', notif: { id: name, text: `${name} ${model} is available` } });
        console.info(`${name} ${model} is available`);
      }
    }
  }, [
    factory.product,
    factory.feature,
    factory.clip,
    factory.funds,
    factory.clipper,
    factory.funds,
    factory.trust,
    factory.operation,
    factory.creativity,
    factory.wireQuantity,
    factory.clipperBonus,
    factory.megaClipperBonus,
    factory.yomi,
  ]);
};
