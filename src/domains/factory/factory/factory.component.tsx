import { useCallback } from 'react';
import { useBusiness, useBusinessDispatch } from '@/src/domains/business/interface/useBusiness.ts';
import { BusinessComponent } from '@/src/domains/business/ui/business/business.component.tsx';
import { useEnginery } from '@/src/domains/enginery/interface/useEnginery.ts';
import { getQuantity } from '@/src/domains/enginery/utils/getQuantity.ts';
import { ComputingComponent } from '@/src/domains/factory/computing/computing.component.tsx';
import { ManufacturingComponent } from '@/src/domains/factory/manufacturing/manufacturing.component.tsx';
import { ModelingComponent } from '@/src/domains/factory/modeling/modeling.component.tsx';
import { PaperclipComponent } from '@/src/domains/factory/paperclip/paperclip.component.tsx';
import { PowerComponent } from '@/src/domains/factory/power/power.component.tsx';
import { StageComponent } from '@/src/domains/factory/stage/stage.component.tsx';
import { TechnologyComponent } from '@/src/domains/factory/technology/technology.component.tsx';
import { TradeComponent } from '@/src/domains/factory/trade/trade.component.tsx';
import { useSupply, useSupplyDispatch } from '@/src/domains/supply/interface/useSupply.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import { CardsComponent } from '@/src/shared/ui/cards/cards.component.tsx';
import styles from '@/src/domains/factory/factory/factory.module.scss';

function FactoryComponent() {
  const supplyDispatch = useSupplyDispatch();
  const businessDispatch = useBusinessDispatch();
  const { wire } = useSupply();
  const { publicDemand, inventory } = useBusiness();
  const { autoClipper, paperclipFactory, megaClipper } = useEnginery();

  const autoProduction = useCallback(() => {
    if (!wire.quantity) return;

    const quantity = getQuantity(
      wire.quantity,
      autoClipper.quantity,
      megaClipper.quantity,
      paperclipFactory.quantity
    );

    if (!quantity) return;

    supplyDispatch({
      type: 'DECREASE_WIRE_QUANTITY',
      quantity,
    });
    businessDispatch({
      type: 'INCREASE_INVENTORY_QUANTITY',
      quantity,
    });
    supplyDispatch({
      type: 'INCREASE_PAPERCLIP_QUANTITY',
      quantity,
    });
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

    businessDispatch({
      type: 'DECREASE_INVENTORY_QUANTITY',
      quantity: inventoryQuantity,
    });
    businessDispatch({
      type: 'INCREASE_FUNDS_QUANTITY',
      quantity: fundsQuantity,
    });
  }, [businessDispatch, businessDispatch, inventory.quantity, publicDemand.quantity]);

  useInterval(autoProduction, 1e3);
  useInterval(autoSell, 5e2);

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
        <ModelingComponent />
      </CardsComponent>
    </ArticleComponent>
  );
}

export default FactoryComponent;
