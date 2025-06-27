import { useState } from 'react';
import { useAlertsDispatch } from '@/src/features/notification/infrastructure/useAlerts.ts';
import { useAuthentification } from '@/src/features/authentification/infrastructure/useAuthentification.ts';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { regexTest } from '@/src/common/shared/utils/regexTest.ts';
import { base64Encode } from '@/src/common/shared/utils/base64Encode.ts';
import { TextFieldComponent } from '@/src/common/components/textfield/TextFieldComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import styles from '@/src/features/authentification/components/login/LoginComponent.module.scss';

export const LoginComponent = ({ className }: { className: string }) => {
  const setAlerts = useAlertsDispatch();
  const [authentification, setAuthentification] = useAuthentification();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const resetErrors = () => {
    setUsernameError('');
    setPasswordError('');
  };

  const requiredErrors = () => {
    if (!username) setUsernameError('required');
    if (!password) setPasswordError('required');
  };

  const onSignIn = async () => {
    resetErrors();
    if (!username || !password) return requiredErrors();

    const hashPassword = await base64Encode(password);
    const user = authentification.users.find((u) => u.username === username);

    if (!user) {
      setUsernameError('incorrect username');
      return;
    }

    if (user.password !== hashPassword) {
      setPasswordError('your password is incorrect');
      return;
    }

    setAuthentification({ type: 'SIGN_IN', username, password: hashPassword });
    setAlerts({
      type: 'ADD_ALERT',
      alert: { id: 'sign-in', status: 'success', text: `${username} is connected` },
    });
  };

  const onSignUp = async () => {
    resetErrors();

    if (!username || !password) return requiredErrors();

    let valid = true;

    if (!regexTest(/^[A-Za-z]{3,10}$/, username)) {
      setUsernameError('your username must be at least 3 alphabetical characters long');
      valid = false;
    }

    if (!regexTest(/^[A-Za-z0-9]{5,10}$/, password)) {
      setPasswordError('your username must be at least 5 alphabetical characters long');
      valid = false;
    }

    const usernameTaken = authentification.users.some((u) => u.username === username);

    if (usernameTaken) {
      setUsernameError('username already taken');
      valid = false;
    }

    if (!valid) return;

    const hashPassword = await base64Encode(password);

    setAuthentification({ type: 'SIGN_UP', username, password: hashPassword });
    setAlerts({
      type: 'ADD_ALERT',
      alert: { id: 'sign-up', status: 'success', text: `${username} successfully registered` },
    });
  };

  return (
    <div className={classNames([styles.login, className])}>
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
          onClick={onSignIn}
        >
          sign in
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={onSignUp}
        >
          sign up
        </ButtonComponent>
      </div>
    </div>
  );
};
