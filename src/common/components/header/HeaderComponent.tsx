import { useGame } from '@/src/features/game/infrastructure/useGame.ts';
import styles from '@/src/common/components/header/HeaderComponent.module.scss';
import type { NameScreen } from '@/src/features/game/domain/NameScreen.ts';

export const HeaderComponent = () => {
  const [game, setGame] = useGame();

  const goTo = (screen: NameScreen) => {
    if (screen === game.screen) return;
    setGame({ ...game, screen: screen });
  };

  return (
    <header
      className={styles.header}
      role="banner"
    >
      <div className={styles.nav}>
        {(['screen1', 'screen2', 'screen3', 'screen4'] as NameScreen[]).map((p) => (
          <button
            key={p}
            onClick={() => goTo(p)}
            className={game.screen === p ? styles.active : ''}
          >
            {p.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
};
