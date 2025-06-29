import { SunComponent } from '@/src/features/factory/components/backdrop/sun/SunComponent.tsx';
import { CloudsComponent } from '@/src/features/factory/components/backdrop/clouds/CloudsComponent.tsx';
import { CloudComponent } from '@/src/features/factory/components/backdrop/cloud/CloudComponent.tsx';
import styles from '@/src/features/factory/components/backdrop/sky/SkyComponent.module.scss';

export const SkyComponent = ({
  sun,
  clouds,
  cloud1,
  cloud2,
  cloud3,
}: {
  sun?: string;
  clouds?: string;
  cloud1?: string;
  cloud2?: string;
  cloud3?: string;
}) => {
  return (
    <div className={styles.sky}>
      <SunComponent className={sun} />
      <CloudsComponent className={clouds}>
        {cloud1 && <CloudComponent className={cloud1} />}
        {cloud2 && <CloudComponent className={cloud2} />}
        {cloud3 && <CloudComponent className={cloud3} />}
      </CloudsComponent>
    </div>
  );
};
