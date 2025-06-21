import { useGame } from '@/src/features/game/infrastructure/useGame.ts';
import styles from '@/src/common/components/header/Header.module.scss';
import type { NamePage } from '@/src/features/game/domain/NamePage.ts';

export const HeaderComponent = () => {
  const [game, setGame] = useGame();

  const goToPage = (page: NamePage) => {
    if (page === game.page) return;
    setGame({ ...game, page: page });
  };

  return (
    <header
      className={styles.header}
      role="banner"
    >
      <div className={styles.nav}>
        {(['page1', 'page2', 'page3', 'page4'] as NamePage[]).map((p) => (
          <button
            key={p}
            onClick={() => goToPage(p)}
            className={game.page === p ? styles.active : ''}
          >
            {p.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
};
