import { useTranslation } from 'react-i18next';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Empty } from '@/src/shared/ui/empty/empty.type.ts';
import styles from '@/src/shared/ui/empty/empty.module.scss';

export const EmptyComponent = ({ className }: Empty) => {
  const { t } = useTranslation();
  return <div className={classNames(styles.empty, className)}>{t('app.noData')}</div>;
};
