import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LoginComponent } from '@/src/domains/auth/interfaces/ui/login/login.component.tsx';
import { PROFILE_STATE } from '@/src/domains/profile/infrastructure/profile.state.ts';
import { FACTORY_STATE } from '@/src/domains/factory/infrastructure/factory.state.ts';

import * as authHook from '@/src/domains/auth/interfaces/useAuth';
import * as notifHook from '@/src/domains/notification/interfaces/useNotif';
import * as utils from '@/src/shared/utils/base64Encode';

describe('login component', () => {
  const mockAuthDispatch = vi.fn();
  const mockNotifDispatch = vi.fn();

  beforeEach(() => {
    vi.spyOn(authHook, 'useAuth').mockReturnValue({
      users: { emma: { password: 'dGVzdA==', profile: PROFILE_STATE, factory: FACTORY_STATE } },
      user: null,
    });

    vi.spyOn(authHook, 'useAuthDispatch').mockReturnValue(mockAuthDispatch);
    vi.spyOn(notifHook, 'useNotifDispatch').mockReturnValue(mockNotifDispatch);
    vi.spyOn(utils, 'base64Encode').mockImplementation(async (str: string) => btoa(str));
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should render "required" if the fields are empty', () => {
    render(<LoginComponent />);

    fireEvent.click(screen.getByText(/login/i));

    expect(screen.getAllByText('required')).toHaveLength(2);
  });

  it('should render "unknown username" if the username is unknown', async () => {
    render(<LoginComponent />);

    fireEvent.change(screen.getByPlaceholderText('username'), { target: { value: 'test' } });
    fireEvent.change(screen.getByPlaceholderText('password'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText('login'));

    expect(await screen.findByText('unknown username')).toBeInTheDocument();
  });

  it('should render "incorrect password" if the password is incorrect', async () => {
    render(<LoginComponent />);

    fireEvent.change(screen.getByPlaceholderText('username'), { target: { value: 'emma' } });
    fireEvent.change(screen.getByPlaceholderText('password'), { target: { value: 'wrong' } });
    fireEvent.click(screen.getByText('login'));

    expect(await screen.findByText('incorrect password')).toBeInTheDocument();
  });

  it('should render "emma is connected" if correctly log', async () => {
    render(<LoginComponent />);

    fireEvent.change(screen.getByPlaceholderText('username'), { target: { value: 'emma' } });
    fireEvent.change(screen.getByPlaceholderText('password'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText('login'));

    await waitFor(() => {
      expect(mockAuthDispatch).toHaveBeenCalledWith({
        type: 'LOG_IN',
        username: 'emma',
      });

      expect(mockNotifDispatch).toHaveBeenCalledWith({
        type: 'ADD',
        alert: expect.objectContaining({ text: 'emma is connected' }),
      });
    });
  });
});
