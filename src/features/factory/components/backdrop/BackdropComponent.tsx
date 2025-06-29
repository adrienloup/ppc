import { useProfile } from '@/src/features/profile/infrastructure/useProfile.ts';
import { SkyComponent } from '@/src/features/factory/components/backdrop/sky/SkyComponent.tsx';
import { SpaceComponent } from '@/src/features/factory/components/backdrop/space/SpaceComponent.tsx';

type ClassNames = {
  sun?: string;
  clouds?: string;
  cloud1?: string;
  cloud2?: string;
  cloud3?: string;
  stars?: string;
  star1?: string;
  star2?: string;
  star3?: string;
  star4?: string;
  star5?: string;
};

export const BackdropComponent = ({ classNames }: { classNames: ClassNames }) => {
  const [profile] = useProfile();

  const themes = {
    dusk: () => (
      <SkyComponent
        sun={classNames.sun}
        clouds={classNames.clouds}
        cloud1={classNames.cloud1}
        cloud2={classNames.cloud2}
        cloud3={classNames.cloud3}
      />
    ),
    tumult: () => (
      <SkyComponent
        sun={classNames.sun}
        clouds={classNames.clouds}
        cloud1={classNames.cloud1}
        cloud2={classNames.cloud2}
        cloud3={classNames.cloud3}
      />
    ),
    cataclysm: () => (
      <SpaceComponent
        stars={classNames.stars}
        star1={classNames.star1}
        star2={classNames.star2}
        star3={classNames.star3}
        star4={classNames.star4}
        star5={classNames.star5}
      />
    ),
  } as const;

  const renderTheme = themes[profile.theme as keyof typeof themes] ?? themes.dusk;

  return renderTheme();
};
