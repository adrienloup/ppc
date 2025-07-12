import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MainComponent } from '@/src/shared/components/main/main.component.tsx';

describe('main component', () => {
  it('should render content when "children" is provided', () => {
    render(<MainComponent>main</MainComponent>);

    expect(screen.getByText('main')).toBeInTheDocument();
  });
});
