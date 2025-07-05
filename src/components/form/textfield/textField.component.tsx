import { useId, useState } from 'react';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { FormFieldComponent } from '@/src/components/form/formfield/formField.component.tsx';
import type { TextFieldType } from '@/src/components/form/textfield/textField.type.ts';
import styles from '@/src/components/form/textfield/textField.module.scss';

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
}: TextFieldType) => {
  const uId = useId();
  const [focus, setFocus] = useState(false);

  return (
    <FormFieldComponent
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
    >
      <div
        className={classNames([
          styles.textField,
          focus ? styles.focus : '',
          status ? styles[status] : errorMessage ? styles.error : '',
          className,
        ])}
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
