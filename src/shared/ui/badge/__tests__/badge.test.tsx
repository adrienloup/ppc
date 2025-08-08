import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import styles from '@/src/shared/ui/badge/badge.module.scss';

describe('badge component', () => {
  it('should render content when "prefix" and "label are provided', () => {
    render(
      <BadgeComponent
        prefix="+"
        label="label"
      />
    );

    expect(screen.getByText('+label')).toBeInTheDocument();
  });

  it.each(['success', 'warning', 'info', 'error'] as const)(
    'should render <%s> class when "status" is provided',
    (status) => {
      render(
        <BadgeComponent
          label="label"
          status={status}
        />
      );
      const badge = screen.getByText('label');

      expect(badge).toHaveClass(styles.badge);
      expect(badge).toHaveClass(styles[status]);
    }
  );

  it('should render with custom class when "className" is provided', () => {
    render(
      <BadgeComponent
        className="custom-class"
        label="label"
      />
    );

    expect(screen.getByText('label')).toHaveClass('custom-class');
  });
});
