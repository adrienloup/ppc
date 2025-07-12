import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SpaceComponent } from '@/src/shared/components/space/space.component.tsx';

describe('space component', () => {
  it('should render content when "children" is provided', () => {
    render(<SpaceComponent>space</SpaceComponent>);

    expect(screen.getByText('space')).toBeInTheDocument();
  });

  // it('should render a "header" tag, a "main" tag, and a "footer" tag', () => {
  //   render(<LayoutComponent>layout</LayoutComponent>);
  //
  //   expect(screen.getByRole('banner')).toBeInTheDocument();
  //   expect(screen.getByRole('main')).toBeInTheDocument();
  //   expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  // });
});
