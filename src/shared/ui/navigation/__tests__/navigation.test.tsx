import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { NavigationComponent } from '@/src/shared/ui/navigation/navigation.component.tsx';
import styles from '@/src/shared/ui/navigation/navigation.module.scss';

describe('navigation component', () => {
  it('should render nothing if items array is empty', () => {
    render(<NavigationComponent links={[]} />);
    const { container } = render(<NavigationComponent links={[]} />);

    expect(container.firstChild).toBeNull();
  });

  it('should render a nav when "items", "id" and "class" are provided', () => {
    render(
      <MemoryRouter>
        <NavigationComponent
          links={['home']}
          id="custom-id"
          className="custom-class"
        />
      </MemoryRouter>
    );
    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('id', 'custom-id');
    expect(nav).toHaveAttribute('class', `${styles.nav} custom-class`);
  });

  it('should render a button for each item', () => {
    const items = ['home', 'about', 'contact'];
    render(
      <MemoryRouter>
        <NavigationComponent links={items} />
      </MemoryRouter>
    );

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
