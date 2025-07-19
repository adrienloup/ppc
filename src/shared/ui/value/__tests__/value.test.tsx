import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ValueComponent } from '@/src/shared/ui/value/value.component.tsx';

describe('value component', () => {
  it('should render content when "value" is provided', () => {
    render(<ValueComponent value="value" />);

    expect(screen.getByText('value')).toBeInTheDocument();
  });

  it('should render with custom class when "className" is provided', () => {
    render(
      <ValueComponent
        className="custom-class"
        value="value"
      />
    );

    expect(screen.getByText('value')).toHaveClass('custom-class');
  });
});
