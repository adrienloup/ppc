import { useBusiness, useBusinessDispatch } from '@/src/domains/business/interface/useBusiness.ts';
import { useEnginery, useEngineryDispatch } from '@/src/domains/enginery/interface/useEnginery.ts';
import { getQuantity } from '@/src/domains/enginery/utils/getQuantity.ts';
import { useSupply, useSupplyDispatch } from '@/src/domains/supply/interface/useSupply.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';

function FactoryComponent() {
  const supplyDispatch = useSupplyDispatch();
  const businessDispatch = useBusinessDispatch();
  const engineryDispatch = useEngineryDispatch();
  const { paperclip, wire } = useSupply();
  const { funds, publicDemand, inventory } = useBusiness();
  const { clipper, autoClipper, paperclipFactory, megaClipper } = useEnginery();

  const buyAutoClipper = () => {
    engineryDispatch({ type: 'BUY_AUTO_CLIPPER' });
  };

  const buyMegaClipper = () => {
    engineryDispatch({ type: 'BUY_MEGA_CLIPPER' });
  };

  const buyPaperclipFactory = () => {
    engineryDispatch({ type: 'BUY_PAPERCLIP_FACTORY' });
  };

  const increasePaperClipQuantity = () => {
    supplyDispatch({ type: 'DECREASE_WIRE_QUANTITY', quantity: 1 });
    businessDispatch({ type: 'INCREASE_INVENTORY_QUANTITY', quantity: 1 });
    supplyDispatch({ type: 'INCREASE_PAPERCLIP_QUANTITY', quantity: 1 });
  };

  const autoProduction = () => {
    if (!wire.quantity) return;

    const quantity = getQuantity(wire.quantity, autoClipper.quantity, megaClipper.quantity, paperclipFactory.quantity);

    if (!quantity) return;

    supplyDispatch({ type: 'DECREASE_WIRE_QUANTITY', quantity });
    businessDispatch({ type: 'INCREASE_INVENTORY_QUANTITY', quantity });
    supplyDispatch({ type: 'INCREASE_PAPERCLIP_QUANTITY', quantity });
  };

  const autoSell = () => {
    if (!inventory.quantity) return;

    const inventoryQuantity = Math.max(0, Math.floor(inventory.quantity * (1 - publicDemand.quantity)));
    const fundsQuantity = inventory.quantity - inventoryQuantity;

    businessDispatch({ type: 'DECREASE_INVENTORY_QUANTITY', quantity: inventoryQuantity });
    businessDispatch({ type: 'INCREASE_FUNDS_QUANTITY', quantity: fundsQuantity });
  };

  useInterval(autoProduction, 1e3, true);
  useInterval(autoSell, 5e2, true);

  return (
    <ArticleComponent>
      <div style={{ margin: 'auto' }}>
        <div>
          <div>paperclip : {paperclip.quantity}</div>
          <div>0</div>
          <div>paperclips per second</div>
          <ClickerComponent
            prefix="+"
            value={clipper.quantity}
            onClick={increasePaperClipQuantity}
          >
            +{clipper.quantity}
          </ClickerComponent>
          <div>${autoClipper.cost.value} auto clipper cost</div>
          <div>{autoClipper.quantity} auto clipper</div>
          <ClickerComponent
            prefix="+"
            value={1}
            onClick={buyAutoClipper}
          >
            +1
          </ClickerComponent>
          megaClipper
          <ClickerComponent
            prefix="+"
            value={1}
            onClick={buyMegaClipper}
          >
            +1
          </ClickerComponent>
          paperclipFactory
          <ClickerComponent
            prefix="+"
            value={1}
            onClick={buyPaperclipFactory}
          >
            +1
          </ClickerComponent>
        </div>
        <div>inventory {inventory.quantity}</div>
        <div>funds {funds.quantity}</div>
      </div>
    </ArticleComponent>
  );
}

export default FactoryComponent;
