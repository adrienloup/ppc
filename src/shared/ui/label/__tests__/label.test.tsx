import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';

describe('label component', () => {
  it('should render content when "label" is provided', () => {
    render(<LabelComponent label="label" />);

    expect(screen.getByText('label')).toBeInTheDocument();
  });

  it('should render with custom class when "className" is provided', () => {
    render(
      <LabelComponent
        className="custom-class"
        label="label"
      />
    );

    expect(screen.getByText('label')).toHaveClass('custom-class');
  });
});
