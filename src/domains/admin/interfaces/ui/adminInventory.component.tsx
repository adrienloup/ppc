import { useInventory, useInventoryDispatch } from '@/src/domains/inventory/interfaces/useInventory.ts';

export const AdminInventoryComponent = () => {
  const dispatch = useInventoryDispatch();
  const { unsoldInventoryBonus } = useInventory();

  const updateInventoryBonus = (bonus: number) => dispatch({ type: 'INVENTORY_BONUS', bonus });

  return (
    <form>
      <span>inventory bonus = {unsoldInventoryBonus}</span>
      <div>
        <button
          type="button"
          onClick={() => updateInventoryBonus(0)}
        >
          0
        </button>
        <button
          type="button"
          onClick={() => updateInventoryBonus(2)}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => updateInventoryBonus(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => updateInventoryBonus(5e2)}
        >
          500
        </button>
      </div>
    </form>
  );
};
