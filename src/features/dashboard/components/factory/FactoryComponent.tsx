import { useGame } from '@/src/features/game/infrastructure/useGame.ts';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { ArticleComponent } from '@/src/common/components/article/ArticleComponent.tsx';
import { TurbanComponent } from '@/src/common/components/turban/TurbanComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import { CardsComponent } from '@/src/common/components/cards/CardsComponent.tsx';
import { CardComponent } from '@/src/common/components/card/CardComponent.tsx';
import styles from '@/src/features/dashboard/components/factory/FactoryComponent.module.scss';

export const FactoryComponent = ({ isActive }: { isActive: boolean }) => {
  const [game, setGame] = useGame();

  return (
    <div className={classNames([styles.factory, isActive ? styles.active : ''])}>
      <ArticleComponent>
        <TurbanComponent>
          <TitleComponent>factory</TitleComponent>
          <ButtonComponent
            className={styles.button}
            onClick={() => setGame({ ...game, screen: 'screen3' })}
          >
            shop
          </ButtonComponent>
        </TurbanComponent>
        <CardsComponent>
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
          <CardComponent>1</CardComponent>
        </CardsComponent>
      </ArticleComponent>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className={styles[`star${n}`]}
          />
        ))}
      </div>
    </div>
  );
};
