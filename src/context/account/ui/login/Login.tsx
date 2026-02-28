import { type FormEvent, useState } from 'react';
// import { useAuth, useAuthDispatch } from '@/src/domains/auth/interface/useAuth.ts';
import type { LoginType } from '@/src/context/account/ui/login/Login.ts';
import { useAccount, useAccountDispatch } from '@/src/context/account/useAccount.ts';
// import { useNotice } from '@/src/domains/notice/interface/useNotice.ts';
import { Button } from '@/src/shared/ui/button/Button.tsx';
import { Field } from '@/src/shared/ui/field/Field.tsx';
import { Title } from '@/src/shared/ui/title/Title.tsx';
import { base64Encode } from '@/src/shared/utils/base64Encode.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { regexTest } from '@/src/shared/utils/regexTest.ts';
import styles from '@/src/context/account/ui/login/Login.module.scss';

export const Login = ({ className }: LoginType) => {
  // const addNotice = useNotice();
  // const authDispatch = useAuthDispatch();
  const account = useAccount();
  const accountDispatch = useAccountDispatch();
  // const { users } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const resetErrors = () => {
    setUsernameError('');
    setPasswordError('');
  };

  const requiredErrors = () => {
    if (!username) setUsernameError('username required');
    if (!password) setPasswordError('password required');
  };

  const signUp = async () => {
    resetErrors();

    if (!username || !password) return requiredErrors();

    if (account[username]) return setUsernameError('username already taken');

    let valid = true;

    if (!regexTest(/^[A-Za-z]{3,10}$/, username)) {
      setUsernameError('username must contain at least 5 alphabetic characters without spaces');
      valid = false;
    }

    if (!regexTest(/^[A-Za-z0-9]{5,10}$/, password)) {
      setPasswordError('password must contain at least 5 alphabetic characters without spaces');
      valid = false;
    }

    if (!valid) return;

    const hashPassword = await base64Encode(password);

    accountDispatch({
      type: 'SIGN_UP',
      username: username,
      password: hashPassword,
    });

    // addNotice({
    //   status: 'success',
    //   text: `${username} successfully registered`,
    // });
  };

  const logIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    resetErrors();

    if (!username || !password) return requiredErrors();

    const hashPassword = await base64Encode(password);
    const user = account[username];

    if (!user) {
      setUsernameError('unknown username');
      return;
    }

    if (user.password !== hashPassword) {
      setPasswordError('incorrect password');
      return;
    }

    accountDispatch({
      type: 'LOG_IN',
      username: username,
    });

    // addNotice({
    //   text: `${username} is connected`,
    //   status: 'success',
    // });
  };

  return (
    <form
      className={classNames(styles.login, className)}
      onSubmit={logIn}
    >
      <Title className={styles.title}>an account is required</Title>
      <Field
        placeholder="name"
        value={username}
        errorMessage={usernameError}
        onChange={(e) => setUsername(e.target.value)}
        suffix={usernameError ? 'error' : ''}
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
