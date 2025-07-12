import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProgressbarComponent } from '@/src/shared/components/progressbar/progressbar.component.tsx';
import styles from '@/src/shared/components/progressbar/progressbar.module.scss';

describe('progressbar component', () => {
  it('should render with value now, min and max', () => {
    render(
      <ProgressbarComponent
        valueNow={25}
        valueMin={0}
        valueMax={100}
      />
    );
    const progressbar = screen.getByRole('progressbar');

    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveAttribute('aria-valuenow', '25');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
  });

  it('should render correct width', () => {
    const { container } = render(<ProgressbarComponent valueNow={25} />);
    const innerBar = container.querySelector(`.${styles.progress}`);

    expect(innerBar).toHaveStyle('width: 25%');
  });
});
