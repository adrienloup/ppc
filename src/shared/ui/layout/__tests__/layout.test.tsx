import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import LayoutComponent from '@/src/shared/ui/layout/layout.component.tsx';

describe('layout component', () => {
  it('should render content when "children" is provided', () => {
    render(
      <MemoryRouter>
        <LayoutComponent>layout</LayoutComponent>
      </MemoryRouter>
    );

    expect(screen.getByText('layout')).toBeInTheDocument();
  });

  it('should render a "header" tag, a "main" tag, and a "footer" tag', () => {
    render(
      <MemoryRouter>
        <LayoutComponent>layout</LayoutComponent>
      </MemoryRouter>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
