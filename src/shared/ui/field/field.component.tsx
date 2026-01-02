import { useId, useState } from 'react';
import { FormComponent } from '@/src/shared/ui/form/form.component.tsx';
import { IconComponent } from '@/src/shared/ui/icon/icon.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { FieldType } from '@/src/shared/ui/field/field.type.ts';
import styles from '@/src/shared/ui/field/field.module.scss';

export const FieldComponent = ({
  className,
  id,
  label,
  placeholder = 'placeholder',
  helperText,
  errorMessage,
  value,
  prefix,
  suffix,
  status,
  onChange,
}: FieldType) => {
  const uId = useId();
  const [focus, setFocus] = useState(false);

  return (
    <FormComponent
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
    >
      <div
        className={classNames(
          styles.field,
          focus ? styles.focus : '',
          status ? styles[status] : errorMessage ? styles.error : '',
          className
        )}
      >
        {prefix && (
          <IconComponent
            className={styles.prefix}
            icon={prefix}
          />
        )}
        <input
          type="text"
          id={id ? id : uId}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {suffix && (
          <IconComponent
            className={styles.suffix}
            icon={suffix}
          />
        )}
      </div>
    </FormComponent>
  );
};
