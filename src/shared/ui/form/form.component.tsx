import { classNames } from '@/src/shared/utils/classNames.ts';
import type { FormType } from '@/src/shared/ui/form/form.type.ts';
import styles from '@/src/shared/ui/form/form.module.scss';

export const FormComponent = ({ children, className, label, helperText, errorMessage }: FormType) => {
  return (
    <div className={classNames(styles.form, className)}>
      {label && <div className={styles.label}>{label}</div>}
      {children}
      {errorMessage ? (
        <div className={styles.errorMessage}>{errorMessage}</div>
      ) : helperText ? (
        <div className={styles.helperText}>{helperText}</div>
      ) : null}
    </div>
  );
};
