import { HighlightComponent } from '@/src/shared/ui/highlight/highlight.component.tsx';
import { ProgressBarsComponent } from '@/src/shared/ui/progressbars/progressBars.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/dashboard/dashboard.module.scss';

export const IndicatorComponent = () => {
  console.log('IndicatorComponent');

  return (
    <HighlightComponent className={styles.highlight}>
      <ProgressBarsComponent
        total={90}
        value1={40}
        value2={10}
      />
    </HighlightComponent>
  );
};
