import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoaderComponent } from '@/src/shared/components/loader/loader.component.tsx';

describe('loader component', () => {
  it('should render a "header" tag, a "main" tag, and a "footer" tag', () => {
    render(<LoaderComponent />);
    const progressbar = screen.getByRole('progressbar');

    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    expect(progressbar).toHaveAttribute('aria-valuenow', '0');
  });
});
