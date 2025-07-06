import { useState } from 'react';
import { useAuth, useAuthDispatch } from '@/src/features/authentification/useAuth.ts';
import { useNotif } from '@/src/features/notification/useNotif.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { regexTest } from '@/src/shared/utils/regexTest.ts';
import { base64Encode } from '@/src/shared/utils/base64Encode.ts';
import { TitleComponent } from '@/src/components/common/title/title.component.tsx';
import { TextFieldComponent } from '@/src/components/common/form/textfield/textField.component.tsx';
import { ButtonComponent } from '@/src/components/common/button/button.component.tsx';
import type { Login } from '@/src/components/common/login/login.type.ts';
import type { User } from '@/src/features/authentification/auth.type.ts';
import styles from '@/src/components/common/login/login.module.scss';

export const LoginComponent = ({ className }: Login) => {
  const setAuth = useAuthDispatch();
  const { users } = useAuth();
  const [, setNotif] = useNotif();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const resetErrors = () => {
    setUsernameError('');
    setPasswordError('');
  };

  const requiredErrors = () => {
    if (!username) setUsernameError('required');
    if (!password) setPasswordError('required');
  };

  const onLogin = async () => {
    resetErrors();
    if (!username || !password) return requiredErrors();

    const hashPassword = await base64Encode(password);
    const user = users.find((user: User) => user.username === username);

    if (!user) {
      setUsernameError('unknown username');
      return;
    }

    if (user.password !== hashPassword) {
      setPasswordError('incorrect password');
      return;
    }

    setAuth({ type: 'LOG_IN', username, password: hashPassword });
    setNotif({
      type: 'ADD_NOTIF',
      notif: { id: 'sign-in', text: `${username} is connected`, status: 'success', timeout: 2e3 },
    });
  };

  const onSignup = async () => {
    resetErrors();

    if (!username || !password) return requiredErrors();

    const usernameTaken = users.some((user: User) => user.username === username);

    if (usernameTaken) return setUsernameError('username already taken');

    let valid = true;

    if (!regexTest(/^[A-Za-z]{3,10}$/, username)) {
      setUsernameError('username must be at least 3 alphabetical characters long');
      valid = false;
    }

    if (!regexTest(/^[A-Za-z0-9]{5,10}$/, password)) {
      setPasswordError('username must be at least 5 alphabetical characters long');
      valid = false;
    }

    if (!valid) return;

    const hashPassword = await base64Encode(password);

    setAuth({ type: 'SIGN_UP', username, password: hashPassword });
    setNotif({
      type: 'ADD_NOTIF',
      notif: { id: 'sign-up', text: `${username} successfully registered`, status: 'success', timeout: 2e3 },
    });
  };

  return (
    <div className={classNames([styles.login, className])}>
      <TitleComponent className={styles.title}>an account is required to play</TitleComponent>
      <TextFieldComponent
        placeholder={'username'}
        value={username}
        errorMessage={usernameError}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextFieldComponent
        placeholder={'password'}
        value={password}
        errorMessage={passwordError}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={styles.buttons}>
        <ButtonComponent
          className={styles.button}
          onClick={onLogin}
        >
          login
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={onSignup}
        >
          signup
        </ButtonComponent>
      </div>
    </div>
  );
};
