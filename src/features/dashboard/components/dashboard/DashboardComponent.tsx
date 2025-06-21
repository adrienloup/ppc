import { useEffect } from 'react';
import { useSpring, animated, to } from '@react-spring/web';
import { useGame } from '@/src/features/game/infrastructure/useGame.ts';
import { ProfileComponent } from '@/src/features/dashboard/components/profile/ProfileComponent.tsx';
import { FactoryComponent } from '@/src/features/dashboard/components/factory/FactoryComponent.tsx';
import { ShopComponent } from '@/src/features/dashboard/components/shop/ShopComponent.tsx';
import { ExploreComponent } from '@/src/features/dashboard/components/explore/ExploreComponent.tsx';
import type { Screen } from '@/src/features/game/domain/NameScreen.ts';
import styles from '@/src/features/dashboard/components/dashboard/DashboardComponent.module.scss';

export function DashboardComponent() {
  const [game] = useGame();

  const screen: Screen = {
    screen1: { x: 0, y: 0 },
    screen2: { x: -100, y: 0 },
    screen3: { x: 0, y: -100 },
    screen4: { x: -100, y: -100 },
  };

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0, config: { tension: 180, friction: 22 } }));

  useEffect(() => {
    const { x: targetX, y: targetY } = screen[game.screen];
    api.start({ x: targetX, y: targetY });
  }, [game.screen, api]);

  return (
    <animated.main
      className={styles.main}
      role="main"
      style={{
        transform: to([x, y], (x, y) => `translate(${x}vw, ${y}vh)`),
      }}
    >
      <ProfileComponent isActive={game.screen === 'screen1'} />
      <FactoryComponent isActive={game.screen === 'screen2'} />
      <ShopComponent isActive={game.screen === 'screen3'} />
      <ExploreComponent isActive={game.screen === 'screen4'} />
    </animated.main>
  );
}
