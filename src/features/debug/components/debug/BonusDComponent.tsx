import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';

export const BonusDComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const updateWire = (quantity: number) => setFactory({ type: 'UPDATE_WIRE_QUANTITY', quantity });
  const updateClipperBonus = (bonus: number) => setFactory({ type: 'UPDATE_CLIPPER_BONUS', bonus });
  const updateMegaClipperBonus = (bonus: number) => setFactory({ type: 'UPDATE_MEGA_CLIPPER_BONUS', bonus });
  const updateMarketingBonus = (bonus: number) => setFactory({ type: 'UPDATE_MARKETING_BONUS', bonus });
  const updateUnsoldInventoryBonus = (bonus: number) => setFactory({ type: 'UPDATE_UNSOLD_INVENTORY_BONUS', bonus });

  return (
    <div>
      <form>
        <label>wireQuantity</label>
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
        <button
          type="button"
          onClick={() => updateWire(1e7)}
        >
          1e7
        </button>
        <span>{factory.wireQuantity}</span>
      </form>
      <form>
        <label>clipperBonus</label>
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
          onClick={() => updateClipperBonus(5)}
        >
          5
        </button>
        <button
          type="button"
          onClick={() => updateClipperBonus(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => updateClipperBonus(50)}
        >
          50
        </button>
        <button
          type="button"
          onClick={() => updateClipperBonus(100)}
        >
          100
        </button>
        <span>{factory.clipperBonus}</span>
      </form>
      <form>
        <label>megaClipperBonus</label>
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
          onClick={() => updateMegaClipperBonus(5)}
        >
          5
        </button>
        <button
          type="button"
          onClick={() => updateMegaClipperBonus(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => updateMegaClipperBonus(50)}
        >
          50
        </button>
        <button
          type="button"
          onClick={() => updateMegaClipperBonus(100)}
        >
          100
        </button>
        <span>{factory.megaClipperBonus}</span>
      </form>
      <form>
        <label>marketingBonus</label>
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
        <span>{factory.marketingBonus}</span>
      </form>
      <form>
        <label>unsoldInventoryBonus</label>
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
          onClick={() => updateUnsoldInventoryBonus(5)}
        >
          5
        </button>
        <button
          type="button"
          onClick={() => updateUnsoldInventoryBonus(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => updateUnsoldInventoryBonus(50)}
        >
          50
        </button>
        <button
          type="button"
          onClick={() => updateUnsoldInventoryBonus(100)}
        >
          100
        </button>
        <span>{factory.unsoldInventoryBonus}</span>
      </form>
    </div>
  );
};
