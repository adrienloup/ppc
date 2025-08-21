import { useMeca, useMecaDispatch } from '@/src/domains/mechanical/interfaces/useMeca.ts';

export const AdminMecaComponent = () => {
  const dispatch = useMecaDispatch();
  const { clipperBonus, megaClipperBonus } = useMeca();

  const updateClipperBonus = (bonus: number) => dispatch({ type: 'CLIPPER_BONUS', bonus });
  const updateMegaClipperBonus = (bonus: number) => dispatch({ type: 'MEGA_CLIPPER_BONUS', bonus });

  return (
    <>
      <form>
        <span>clipper bonus = {clipperBonus}</span>
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
            onClick={() => updateClipperBonus(1e2)}
          >
            100
          </button>
        </div>
      </form>
      <form>
        <span>megaClipper bonus = {megaClipperBonus}</span>
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
            onClick={() => updateMegaClipperBonus(1e2)}
          >
            100
          </button>
        </div>
      </form>
    </>
  );
};
