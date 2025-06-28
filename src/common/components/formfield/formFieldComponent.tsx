import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { FormField } from '@/src/common/components/formfield/FormField.ts';
import styles from '@/src/common/components/formfield/FormFieldComponent.module.scss';

export const FormFieldComponent = ({ children, label, helperText, errorMessage, className }: FormField) => {
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
