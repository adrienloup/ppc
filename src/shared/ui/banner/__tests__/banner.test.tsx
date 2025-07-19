import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';

describe('banner component', () => {
  it('should render title when "title" is provided', () => {
    render(<BannerComponent title="title" />);

    expect(screen.getByText('title')).toBeInTheDocument();
  });

  it('should render button with right link when "button" is provided', () => {
    render(
      <MemoryRouter>
        <BannerComponent
          title="title"
          button="home"
        />
      </MemoryRouter>
    );
    const button = screen.getByRole('link');

    expect(button).toHaveTextContent('home');
    expect(button).toHaveAttribute('href', '/ppc/home');
  });

  it('should render with custom class when "className" is provided', () => {
    render(
      <BannerComponent
        className="custom-class"
        title="title"
      />
    );

    expect(screen.getByText('title').parentElement).toHaveClass('custom-class');
  });
});
