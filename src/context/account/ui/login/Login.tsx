import { type SyntheticEvent, useState } from 'react';
import type { LoginType } from '@/src/context/account/ui/login/Login.ts';
import { useAccount, useAccountDispatch } from '@/src/context/account/useAccount.ts';
import { useSettingsDispatch } from '@/src/context/settings/useSettings.ts';
import { Button } from '@/src/shared/ui/button/Button.tsx';
import { Field } from '@/src/shared/ui/field/Field.tsx';
import { useNoticeDispatch } from '@/src/shared/ui/notice/useNoticeDispatch.ts';
import { Title } from '@/src/shared/ui/title/Title.tsx';
import { base64Encode } from '@/src/shared/utils/base64Encode.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { regexTest } from '@/src/shared/utils/regexTest.ts';
import styles from '@/src/context/account/ui/login/Login.module.scss';

export const Login = ({ className }: LoginType) => {
  const { user } = useAccount();
  const accountDispatch = useAccountDispatch();
  const settingsDispatch = useSettingsDispatch();
  const noticeDispatch = useNoticeDispatch();
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

    if (user[name]) return setNameError('name already taken');

    let valid = true;

    if (!regexTest(/^[A-Za-z]{3,10}$/, name)) {
      setNameError('name must contain at least 3 alphabetic characters without spaces');
      valid = false;
    }

    if (!regexTest(/^[A-Za-z0-9]{3,10}$/, password)) {
      setPasswordError('password must contain at least 3 alphabetic characters without spaces');
      valid = false;
    }

    if (!valid) return;

    const hashPassword = await base64Encode(password);

    accountDispatch({
      type: 'SIGN_UP',
      name: name,
      password: hashPassword,
    });

    noticeDispatch({
      status: 'success',
      text: `${name} successfully registered`,
    });
  };

  const logIn = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    resetErrors();

    if (!name || !password) return requiredErrors();

    const hashPassword = await base64Encode(password);
    const username = user[name];

    if (!username) {
      setNameError('unknown name');
      return;
    }

    if (username.password !== hashPassword) {
      setPasswordError('incorrect password');
      return;
    }

    accountDispatch({
      type: 'LOG_IN',
      name: name,
    });

    settingsDispatch({
      type: 'LOAD',
      settings: username.settings,
    });

    noticeDispatch({
      status: 'success',
      text: `${name} is connected`,
    });
  };

  return (
    <form
      className={classNames(styles.login, className)}
      onSubmit={logIn}
    >
      <Title className={styles.title}>an account is required</Title>
      <Field
        placeholder="name"
        value={name}
        errorMessage={nameError}
        onChange={(e) => setName(e.target.value)}
        suffix={nameError ? 'error' : ''}
      />
      <Field
        placeholder="password"
        value={password}
        errorMessage={passwordError}
        onChange={(e) => setPassword(e.target.value)}
        suffix={passwordError ? 'error' : ''}
      />
      <div className={styles.buttons}>
        <Button
          className={styles.button}
          onClick={signUp}
        >
          sign up
        </Button>
        <Button
          className={styles.button}
          type="submit"
        >
          log in
        </Button>
      </div>
    </form>
  );
};
