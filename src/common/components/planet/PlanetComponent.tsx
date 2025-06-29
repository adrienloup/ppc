import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Planet } from '@/src/common/components/planet/Planet.ts';
import styles from '@/src/common/components/planet/PlanetComponent.module.scss';

export const PlanetComponent = ({ className }: Planet) => {
  return <div className={classNames([styles.planet, className])}></div>;
};
