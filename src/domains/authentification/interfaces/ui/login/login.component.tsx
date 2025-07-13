import { useState } from 'react';
import { useAuth, useAuthDis } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { regexTest } from '@/src/shared/utils/regexTest.ts';
import { base64Encode } from '@/src/shared/utils/base64Encode.ts';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { TextFieldComponent } from '@/src/shared/ui/textfield/textField.component.tsx';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import type { Login } from '@/src/domains/authentification/interfaces/ui/login/login.type.ts';
import styles from '@/src/domains/authentification/interfaces/ui/login/login.module.scss';

export const LoginComponent = ({ className }: Login) => {
  const { signUp, logIn } = useAuthDis();
  const { users } = useAuth();
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

  const onLogIn = async () => {
    resetErrors();
    if (!username || !password) return requiredErrors();

    const hashPassword = await base64Encode(password);
    const user = users[username];

    if (!user) {
      setUsernameError('unknown username');
      return;
    }

    if (user.password !== hashPassword) {
      setPasswordError('incorrect password');
      return;
    }

    logIn(username, hashPassword);
  };

  const onSignUp = async () => {
    resetErrors();

    if (!username || !password) return requiredErrors();

    if (users[username]) return setUsernameError('username already taken');

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

    signUp(username, hashPassword);
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
          onClick={onLogIn}
        >
          log in
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
