import { useCallback } from 'react';
import { useBusiness, useBusinessDispatch } from '@/src/domains/business/interface/useBusiness.ts';
import { useEnginery, useEngineryDispatch } from '@/src/domains/enginery/interface/useEnginery.ts';
import { useSupply, useSupplyDispatch } from '@/src/domains/supply/interface/useSupply.ts';
import { getQuantity } from '@/src/domains/supply/utils/getQuantity.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { GroupComponent } from '@/src/shared/ui/group/group.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { TagComponent } from '@/src/shared/ui/tag/tag.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { ValueComponent } from '@/src/shared/ui/value/value.component.tsx';
import styles from '@/src/domains/factory/ui/manufacturing/manufacturing.module.scss';

export const ManufacturingComponent = () => {
  const businessDispatch = useBusinessDispatch();
  const engineryDispatch = useEngineryDispatch();
  const supplyDispatch = useSupplyDispatch();
  const { autoClipper } = useEnginery();
  const { paperclip, wire } = useSupply();
  const { funds } = useBusiness();

  const increasePaperClipQuantity = () => {
    supplyDispatch({ type: 'DECREASE_WIRE_QUANTITY', quantity: 1 });
    businessDispatch({ type: 'INCREASE_INVENTORY_QUANTITY', quantity: 1 });
    supplyDispatch({ type: 'INCREASE_PAPERCLIP_QUANTITY', quantity: 1 });
  };

  const increaseWireQuantity = () => {
    const wireQuantity = getQuantity(paperclip.quantity);
    const fundsQuantity = wire.cost.value;

    supplyDispatch({ type: 'INCREASE_WIRE_QUANTITY', quantity: wireQuantity });
    businessDispatch({ type: 'DECREASE_FUNDS_QUANTITY', quantity: fundsQuantity });
  };

  const buyAutoClipper = () => {
    engineryDispatch({ type: 'BUY_AUTO_CLIPPER' });
  };

  const autoUpdateWireCost = useCallback(() => {
    supplyDispatch({ type: 'UPDATE_WIRE_COST' });
  }, [supplyDispatch]);

  useInterval(autoUpdateWireCost, 1e4, true);

  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        manufacture
      </TitleComponent>
      <DialsComponent className={styles.dials}>
        <DialComponent>
          <ValueComponent>{0}</ValueComponent>
          <LabelComponent>paperclips per second</LabelComponent>
          <ClickerComponent
            className={styles.button}
            prefix="+"
            value={1}
            onClick={increasePaperClipQuantity}
          >
            +1
          </ClickerComponent>
        </DialComponent>
      </DialsComponent>
      <DialsComponent className={styles.dials}>
        <DialComponent>
          <ValueComponent>${wire.cost.value.toFixed(2)}</ValueComponent>
          <LabelComponent>wire cost</LabelComponent>
        </DialComponent>
        <DialComponent>
          <GroupComponent>
            <ValueComponent>{wire.quantity}</ValueComponent>
            {wire.quantity === 0 && (
              <TagComponent
                className={styles.box}
                icon="block"
              >
                empty
              </TagComponent>
            )}
          </GroupComponent>
          <LabelComponent>wire stock</LabelComponent>
          <ClickerComponent
            className={styles.button}
            prefix="+"
            value={getQuantity(paperclip.quantity)}
            disabled={funds.quantity < wire.cost.value}
            onClick={increaseWireQuantity}
          >
            +{getQuantity(paperclip.quantity)}
          </ClickerComponent>
        </DialComponent>
      </DialsComponent>
      <DialsComponent className={styles.dials}>
        <DialComponent>
          <ValueComponent>${autoClipper.cost.value.toFixed(2)}</ValueComponent>
          <LabelComponent>autoclipper cost</LabelComponent>
          <ClickerComponent
            prefix="+"
            value={1}
            disabled={funds.quantity < autoClipper.cost.value}
            onClick={buyAutoClipper}
          >
            +1
          </ClickerComponent>
        </DialComponent>
      </DialsComponent>
    </CardComponent>
  );
};
