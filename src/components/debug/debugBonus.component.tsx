import { useFactoryDispatch } from '@/src/features/factory/useFactory.ts';

export const DebugBonusComponent = () => {
  const setFactory = useFactoryDispatch();

  const updateWire = (quantity: number) => setFactory({ type: 'UPDATE_WIRE_QUANTITY', quantity });
  const updateClipperBonus = (bonus: number) => setFactory({ type: 'UPDATE_CLIPPER_BONUS', bonus });
  const updateMegaClipperBonus = (bonus: number) => setFactory({ type: 'UPDATE_MEGA_CLIPPER_BONUS', bonus });
  const updateMarketingBonus = (bonus: number) => setFactory({ type: 'UPDATE_MARKETING_BONUS', bonus });
  const updateClipFactoryBonus = (bonus: number) => setFactory({ type: 'UPDATE_CLIP_FACTORY_BONUS', bonus });
  const updateUnsoldInventoryBonus = (bonus: number) =>
    setFactory({ type: 'UPDATE_UNSOLD_INVENTORY_BONUS', bonus });

  return (
    <>
      <form>
        <span>wire quantity</span>
        <button
          type="button"
          onClick={() => updateWire(1e2)}
        >
          1e2
        </button>
        <button
          type="button"
          onClick={() => updateWire(1e3)}
        >
          1e3
        </button>
        <button
          type="button"
          onClick={() => updateWire(1e4)}
        >
          1e4
        </button>
        <button
          type="button"
          onClick={() => updateWire(1e5)}
        >
          1e5
        </button>
        <button
          type="button"
          onClick={() => updateWire(1e6)}
        >
          1e6
        </button>
      </form>
      <form>
        <span>clipper bonus</span>
        <button
          type="button"
          onClick={() => updateClipperBonus(0)}
        >
          0
        </button>
        <button
          type="button"
          onClick={() => updateClipperBonus(2)}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => updateClipperBonus(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => updateClipperBonus(100)}
        >
          100
        </button>
      </form>
      <form>
        <span>mega clipper bonus</span>
        <button
          type="button"
          onClick={() => updateMegaClipperBonus(0)}
        >
          0
        </button>
        <button
          type="button"
          onClick={() => updateMegaClipperBonus(2)}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => updateMegaClipperBonus(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => updateMegaClipperBonus(100)}
        >
          100
        </button>
      </form>
      <form>
        <span>marketing bonus</span>
        <button
          type="button"
          onClick={() => updateMarketingBonus(0)}
        >
          0
        </button>
        <button
          type="button"
          onClick={() => updateMarketingBonus(2)}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => updateMarketingBonus(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => updateMarketingBonus(100)}
        >
          100
        </button>
      </form>
      <form>
        <span>inventory bonus</span>
        <button
          type="button"
          onClick={() => updateUnsoldInventoryBonus(0)}
        >
          0
        </button>
        <button
          type="button"
          onClick={() => updateUnsoldInventoryBonus(2)}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => updateUnsoldInventoryBonus(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => updateUnsoldInventoryBonus(100)}
        >
          100
        </button>
      </form>
      <form>
        <span>ClipFactory bonus</span>
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
          onClick={() => updateClipFactoryBonus(100)}
        >
          100
        </button>
      </form>
    </>
  );
};
