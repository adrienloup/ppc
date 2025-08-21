import { useElectronic, useElectronicDispatch } from '@/src/domains/electronic/interfaces/useElec.ts';

export const AdminElecComponent = () => {
  const dispatch = useElectronicDispatch();
  const { clipFactoryBonus } = useElectronic();

  const updateClipFactoryBonus = (bonus: number) => dispatch({ type: 'CLIP_FACTORY_BONUS', bonus });

  return (
    <form>
      <span>clipFactory bonus = {clipFactoryBonus}</span>
      <div>
        <button
          type="button"
          onClick={() => updateClipFactoryBonus(0)}
        >
          0
        </button>
        <button
          type="button"
          onClick={() => updateClipFactoryBonus(2)}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => updateClipFactoryBonus(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => updateClipFactoryBonus(5e2)}
        >
          500
        </button>
      </div>
    </form>
  );
};
