import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CardsComponent } from '@/src/shared/ui/cards/cards.component.tsx';

describe('cards component', () => {
  it('should render content when "children" is provided', () => {
    render(<CardsComponent>cards</CardsComponent>);

    expect(screen.getByText('cards')).toBeInTheDocument();
  });

  it('should render with custom class when "className" is provided', () => {
    render(<CardsComponent className="custom-class">cards</CardsComponent>);

    expect(screen.getByText('cards')).toHaveClass('custom-class');
  });
});
