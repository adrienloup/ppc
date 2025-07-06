import { classNames } from '@/src/shared/utils/classNames.ts';
import type { FormField } from '@/src/components/common/form/formfield/formField.type.ts';
import styles from '@/src/components/common/form/formfield/formField.module.scss';

export const FormFieldComponent = ({ children, className, label, helperText, errorMessage }: FormField) => {
  return (
    <div className={classNames([styles.formField, className])}>
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
