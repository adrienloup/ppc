import { useCallback, useEffect, useRef } from 'react';
import { useBusiness, useBusinessDispatch } from '@/src/domains/business/interface/useBusiness.ts';
import { useEnginery, useEngineryDispatch } from '@/src/domains/enginery/interface/useEnginery.ts';
import { useNotice } from '@/src/domains/notice/interface/useNotice.ts';
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
  const addNotice = useNotice();
  const businessDispatch = useBusinessDispatch();
  const engineryDispatch = useEngineryDispatch();
  const supplyDispatch = useSupplyDispatch();
  const { autoClipper } = useEnginery();
  const { paperclip, wire } = useSupply();
  const { funds } = useBusiness();
  const wireQuantityRef = useRef(wire.quantity);

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

  const buyMegaClipper = () => {
    engineryDispatch({ type: 'BUY_MEGA_CLIPPER' });
  };

  const buyPaperclipFactory = () => {
    engineryDispatch({ type: 'BUY_PAPERCLIP_FACTORY' });
  };

  const autoUpdateWireCost = useCallback(() => {
    supplyDispatch({ type: 'UPDATE_WIRE_COST' });
  }, [supplyDispatch]);

  useEffect(() => {
    if (wireQuantityRef.current !== 0 && wire.quantity === 0) {
      addNotice({ text: 'empty wire stock', status: 'error' });
    }
    wireQuantityRef.current = wire.quantity;
  }, [wire.quantity]);

  useInterval(autoUpdateWireCost, 1e4, true);

  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        manufacturing
      </TitleComponent>
      <DialsComponent className={styles.dials}>
        <DialComponent>
          <ValueComponent>{0}</ValueComponent>
          <LabelComponent>per second</LabelComponent>
          <ClickerComponent
            className={styles.button}
            value="+1"
            disabled={wire.quantity === 0}
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
            {wire.quantity === 0 && <TagComponent icon="block">empty</TagComponent>}
          </GroupComponent>
          <LabelComponent>wire stock</LabelComponent>
          <ClickerComponent
            className={styles.button}
            value={`+${getQuantity(paperclip.quantity)}`}
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
        </DialComponent>
        <DialComponent>
          <ValueComponent>{autoClipper.quantity}</ValueComponent>
          <LabelComponent>autoclipper</LabelComponent>
          <ClickerComponent
            className={styles.button}
            value="+1"
            disabled={funds.quantity < autoClipper.cost.value}
            onClick={buyAutoClipper}
          >
            +1
          </ClickerComponent>
        </DialComponent>
      </DialsComponent>
      <DialsComponent className={styles.dials}>
        <DialComponent>
          megaClipper
          <ClickerComponent
            value="+1"
            onClick={buyMegaClipper}
          >
            +1
          </ClickerComponent>
        </DialComponent>
      </DialsComponent>
      <DialsComponent className={styles.dials}>
        <DialComponent>
          paperclipFactory
          <ClickerComponent
            value="+1"
            onClick={buyPaperclipFactory}
          >
            +1
          </ClickerComponent>
        </DialComponent>
      </DialsComponent>
    </CardComponent>
  );
};
