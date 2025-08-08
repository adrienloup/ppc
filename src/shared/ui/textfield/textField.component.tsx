import { useId, useState } from 'react';
import { FormFieldComponent } from '@/src/shared/ui/formfield/formField.component.tsx';
import type { TextField } from '@/src/shared/ui/textfield/textField.type.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/textfield/textField.module.scss';

export const TextFieldComponent = ({
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
}: TextField) => {
  const uId = useId();
  const [focus, setFocus] = useState(false);

  return (
    <FormFieldComponent
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
    >
      <div
        className={classNames(
          styles.textField,
          focus ? styles.focus : '',
          status ? styles[status] : errorMessage ? styles.error : '',
          className
        )}
      >
        {prefix &&
          // <IconComponent
          //   icon={prefix}
          //   className={styles.icon}
          // />
          'icon'}
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
        {suffix &&
          // <IconComponent
          //   icon={suffix}
          //   className={styles.icon}
          // />
          'suffix'}
      </div>
    </FormFieldComponent>
  );
};
