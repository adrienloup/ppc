import { type FormEvent, useState } from 'react';
import { useAuth, useAuthDispatch } from '@/src/domains/auth/interface/useAuth.ts';
import { useNotice } from '@/src/domains/notice/interface/useNotice.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { FieldComponent } from '@/src/shared/ui/field/field.component.tsx';
import { IconComponent } from '@/src/shared/ui/icon/icon.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { base64Encode } from '@/src/shared/utils/base64Encode.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { regexTest } from '@/src/shared/utils/regexTest.ts';
import type { LoginType } from '@/src/domains/auth/ui/login/login.type.ts';
import styles from '@/src/domains/auth/ui/login/login.module.scss';

export const LoginComponent = ({ className }: LoginType) => {
  const addNotice = useNotice();
  const authDispatch = useAuthDispatch();
  const { users } = useAuth();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const resetErrors = () => {
    setNameError('');
    setPasswordError('');
  };

  const requiredErrors = () => {
    if (!name) setNameError('name required');
    if (!password) setPasswordError('password required');
  };

  const signUp = async () => {
    resetErrors();

    if (!name || !password) return requiredErrors();

    if (users[name]) return setNameError('name already taken');

    let valid = true;

    if (!regexTest(/^[A-Za-z]{3,10}$/, name)) {
      setNameError('name must contain at least 5 alphabetic characters without spaces');
      valid = false;
    }

    if (!regexTest(/^[A-Za-z0-9]{5,10}$/, password)) {
      setPasswordError('password must contain at least 5 alphabetic characters without spaces');
      valid = false;
    }

    if (!valid) return;

    const hashPassword = await base64Encode(password);

    authDispatch({
      type: 'SIGN_UP',
      name: name,
      password: hashPassword,
    });

    addNotice({
      status: 'success',
      text: `${name} successfully registered`,
    });
  };

  const logIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    resetErrors();

    if (!name || !password) return requiredErrors();

    const hashPassword = await base64Encode(password);
    const user = users[name];

    if (!user) {
      setNameError('unknown name');
      return;
    }

    if (user.password !== hashPassword) {
      setPasswordError('incorrect password');
      return;
    }

    authDispatch({
      type: 'LOG_IN',
      name: name,
    });
    addNotice({
      text: `${name} is connected`,
      status: 'success',
    });
  };

  return (
    <form
      className={classNames(styles.login, className)}
      onSubmit={logIn}
    >
      <TitleComponent className={styles.title}>a member account is required</TitleComponent>
      <FieldComponent
        // className={styles.name}
        placeholder="name"
        value={name}
        errorMessage={nameError}
        onChange={(e) => setName(e.target.value)}
        suffix={nameError ? 'error' : ''}
      />
      <FieldComponent
        // className={styles.password}
        placeholder="password"
        value={password}
        errorMessage={passwordError}
        onChange={(e) => setPassword(e.target.value)}
        suffix={passwordError ? 'error' : ''}
      />
      <div className={styles.buttons}>
        <ButtonComponent
          className={styles.button}
          onClick={signUp}
        >
          <IconComponent icon="app_registration" />
          sign up
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          type="submit"
        >
          <IconComponent icon="login" />
          log in
        </ButtonComponent>
      </div>
    </form>
  );
};
