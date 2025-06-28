import { useTranslation } from 'react-i18next';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import styles from '@/src/common/components/empty/EmptyComponent.module.scss';

export const EmptyComponent = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  return <span className={classNames([styles.empty, className])}>{t('app.empty')}</span>;
};
