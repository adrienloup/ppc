import { useFactoryDispatch } from '@/src/domains/factory/interfaces/useFactory.ts';
import type { FactoryState } from '@/src/domains/factory/domain/factoryState.type.ts';

export const DebugBonusComponent = ({ factory }: { factory: FactoryState }) => {
  const dispatch = useFactoryDispatch();

  const updateWire = (quantity: number) => dispatch({ type: 'UPDATE_WIRE_QUANTITY', quantity });
  const updateClipperBonus = (bonus: number) => dispatch({ type: 'UPDATE_CLIPPER_BONUS', bonus });
  const updateMegaClipperBonus = (bonus: number) => dispatch({ type: 'UPDATE_MEGA_CLIPPER_BONUS', bonus });
  const updateClipFactoryBonus = (bonus: number) => dispatch({ type: 'UPDATE_CLIP_FACTORY_BONUS', bonus });
  const updateMarketingBonus = (bonus: number) => dispatch({ type: 'UPDATE_MARKETING_BONUS', bonus });
  const updateUnsoldInventoryBonus = (bonus: number) =>
    dispatch({ type: 'UPDATE_UNSOLD_INVENTORY_BONUS', bonus });

  return (
    <>
      <form>
        <span>wirequantity = {factory.wireQuantity}</span>
        <div>
          <button
            type="button"
            onClick={() => updateWire(1e2)}
          >
            1e2
          </button>
          <button
            type="button"
            onClick={() => updateWire(1e4)}
          >
            1e4
          </button>
          <button
            type="button"
            onClick={() => updateWire(1e6)}
          >
            1e6
          </button>
        </div>
      </form>
      <form>
        <span>clipperbonus = {factory.clipperBonus}</span>
        <div>
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
            onClick={() => updateClipperBonus(5e2)}
          >
            5e2
          </button>
        </div>
      </form>
      <form>
        <span>megaclipperbonus = {factory.megaClipperBonus}</span>
        <div>
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
            onClick={() => updateMegaClipperBonus(5e2)}
          >
            5e2
          </button>
        </div>
      </form>
      <form>
        <span>clipfactorybonus = {factory.clipFactoryBonus}</span>
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
            5e2
          </button>
        </div>
      </form>
      <form>
        <span>marketingbonus = {factory.marketingBonus}</span>
        <div>
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
            onClick={() => updateMarketingBonus(5e2)}
          >
            5e2
          </button>
        </div>
      </form>
      <form>
        <span>inventorybonus = {factory.unsoldInventoryBonus}</span>
        <div>
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
            onClick={() => updateUnsoldInventoryBonus(5e2)}
          >
            5e2
          </button>
        </div>
      </form>
    </>
  );
};
