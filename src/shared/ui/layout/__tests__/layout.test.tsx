import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LayoutComponent from '@/src/shared/ui/layout/layout.component.tsx';

describe('layout component', () => {
  it('should render content when "children" is provided', () => {
    render(<LayoutComponent>layout</LayoutComponent>);

    expect(screen.getByText('layout')).toBeInTheDocument();
  });

  it('should render a "header" tag, a "main" tag, and a "footer" tag', () => {
    render(<LayoutComponent>layout</LayoutComponent>);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
