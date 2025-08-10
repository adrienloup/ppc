import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PopinComponent } from '@/src/shared/ui/popin/popin.component.tsx';

describe('popin component', () => {
  it('should render content when "children" is provided', () => {
    render(<PopinComponent>popin</PopinComponent>);

    expect(screen.getByText('popin')).toBeInTheDocument();
  });
});
