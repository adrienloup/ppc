import { useId, useState } from 'react';
import type { FieldType } from '@/src/shared/ui/field/Field.ts';
import { Form } from '@/src/shared/ui/form/Form.tsx';
import { Icon } from '@/src/shared/ui/icon/Icon.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/field/Field.module.scss';

export const Field = ({
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
    <Form
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
          <Icon
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
          <Icon
            className={styles.suffix}
            icon={suffix}
          />
        )}
      </div>
    </Form>
  );
};
