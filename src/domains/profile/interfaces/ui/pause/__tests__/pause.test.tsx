import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PauseComponent } from '@/src/domains/profile/interfaces/ui/pause/pause.component.tsx';
import * as profileHook from '@/src/domains/profile/interfaces/useProfile.ts';

describe('pause component', () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.spyOn(profileHook, 'useProfileDis').mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should use "PLAY_PAUSE" and render "stopped" when the button in clicked', () => {
    render(<PauseComponent />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'PLAY_PAUSE' });
    expect(screen.getByText('stopped')).toBeInTheDocument();
  });

  it('should use "PLAY_PAUSE" and render "stopped" when the backdrop in clicked', () => {
    render(<PauseComponent />);

    fireEvent.click(screen.getByRole('presentation', { hidden: true }));

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'PLAY_PAUSE' });
    expect(screen.getByText('stopped')).toBeInTheDocument();
  });
});
