import { HighlightComponent } from '@/src/shared/ui/highlight/highlight.component.tsx';
import { ProgressBarsComponent } from '@/src/shared/ui/progressbars/progressBars.component.tsx';
import styles from '@/src/domains/merchandising/interfaces/ui/store/store.module.scss';

export const IndicatorComponent = () => {
  console.log('IndicatorComponent');

  return (
    <HighlightComponent className={styles.highlight}>
      <ProgressBarsComponent
        total={100}
        value1={44}
        value2={18}
      />
    </HighlightComponent>
  );
};
