import { useCallback } from 'react';
import { useBusiness, useBusinessDispatch } from '@/src/domains/business/interface/useBusiness.ts';
import { useEnginery, useEngineryDispatch } from '@/src/domains/enginery/interface/useEnginery.ts';
import { getQuantity } from '@/src/domains/enginery/utils/getQuantity.ts';
import { BusinessComponent } from '@/src/domains/factory/ui/business/business.component.tsx';
import { ComputingComponent } from '@/src/domains/factory/ui/computing/computing.component.tsx';
import { ManufacturingComponent } from '@/src/domains/factory/ui/manufacturing/manufacturing.component.tsx';
import { PaperclipComponent } from '@/src/domains/factory/ui/paperclip/paperclip.component.tsx';
import { PowerComponent } from '@/src/domains/factory/ui/power/power.component.tsx';
import { StageComponent } from '@/src/domains/factory/ui/stage/stage.component.tsx';
import { TechnologyComponent } from '@/src/domains/factory/ui/technology/technology.component.tsx';
import { TradeComponent } from '@/src/domains/factory/ui/trade/trade.component.tsx';
import { useSupply, useSupplyDispatch } from '@/src/domains/supply/interface/useSupply.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { CardsComponent } from '@/src/shared/ui/cards/cards.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import styles from '@/src/domains/factory/ui/factory/factory.module.scss';

function FactoryComponent() {
  const supplyDispatch = useSupplyDispatch();
  const businessDispatch = useBusinessDispatch();
  const engineryDispatch = useEngineryDispatch();
  const { paperclip, wire } = useSupply();
  const { publicDemand, inventory } = useBusiness();
  const { autoClipper, paperclipFactory, megaClipper } = useEnginery();

  const buyMegaClipper = () => {
    engineryDispatch({ type: 'BUY_MEGA_CLIPPER' });
  };

  const buyPaperclipFactory = () => {
    engineryDispatch({ type: 'BUY_PAPERCLIP_FACTORY' });
  };

  const autoProduction = useCallback(() => {
    if (!wire.quantity) return;
    const quantity = getQuantity(wire.quantity, autoClipper.quantity, megaClipper.quantity, paperclipFactory.quantity);

    if (!quantity) return;
    supplyDispatch({ type: 'DECREASE_WIRE_QUANTITY', quantity });
    businessDispatch({ type: 'INCREASE_INVENTORY_QUANTITY', quantity });
    supplyDispatch({ type: 'INCREASE_PAPERCLIP_QUANTITY', quantity });
  }, [
    supplyDispatch,
    businessDispatch,
    supplyDispatch,
    wire.quantity,
    autoClipper.quantity,
    megaClipper.quantity,
    paperclipFactory.quantity,
  ]);

  const autoSell = useCallback(() => {
    if (!inventory.quantity) return;

    const inventoryQuantity = Math.max(0, Math.floor(inventory.quantity * (1 - publicDemand.quantity)));
    const fundsQuantity = inventory.quantity - inventoryQuantity;

    businessDispatch({ type: 'DECREASE_INVENTORY_QUANTITY', quantity: inventoryQuantity });
    businessDispatch({ type: 'INCREASE_FUNDS_QUANTITY', quantity: fundsQuantity });
  }, [businessDispatch, businessDispatch, inventory.quantity, publicDemand.quantity]);

  useInterval(autoProduction, 1e3, true);
  useInterval(autoSell, 5e2, true);

  return (
    <ArticleComponent>
      <BannerComponent
        title="factory"
        button="store"
      />
      <PaperclipComponent />
      <CardsComponent className={styles.cards}>
        <ManufacturingComponent />
        <BusinessComponent />
        <TechnologyComponent />
        <TradeComponent />
        <StageComponent />
        <ComputingComponent />
        <PowerComponent />
        <CardComponent>
          megaClipper
          <ClickerComponent
            prefix="+"
            value={1}
            onClick={buyMegaClipper}
          >
            +1
          </ClickerComponent>
        </CardComponent>
        <CardComponent>
          <div>
            paperclipFactory
            <ClickerComponent
              prefix="+"
              value={1}
              onClick={buyPaperclipFactory}
            >
              +1
            </ClickerComponent>
          </div>
        </CardComponent>
        <CardComponent>
          <div>paperclip : {paperclip.quantity}</div>
        </CardComponent>
      </CardsComponent>
    </ArticleComponent>
  );
}

export default FactoryComponent;
