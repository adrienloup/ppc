import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MainComponent } from '@/src/shared/ui/main/main.component.tsx';

describe('main component', () => {
  it('should render content when "children" is provided', () => {
    render(<MainComponent>main</MainComponent>);

    expect(screen.getByText('main')).toBeInTheDocument();
  });
});
