import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';

describe('card component', () => {
  it('should render content when "children" is provided', () => {
    render(<CardComponent>card</CardComponent>);

    expect(screen.getByText('card')).toBeInTheDocument();
  });

  it('should render with custom class when "className" is provided', () => {
    render(<CardComponent className="custom-class">card</CardComponent>);

    expect(screen.getByText('card')).toHaveClass('custom-class');
  });
});
