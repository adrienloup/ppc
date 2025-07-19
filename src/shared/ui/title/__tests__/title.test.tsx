import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';

describe('title component', () => {
  it('should render content when "children" is provided', () => {
    render(<TitleComponent>title</TitleComponent>);

    expect(screen.getByText('title')).toBeInTheDocument();
  });

  it('should render "h1" as default tag', () => {
    render(<TitleComponent>title</TitleComponent>);

    expect(screen.getByText('title').tagName).toBe('H1');
  });

  it.each(['h2', 'h3', 'h4'] as const)('should render <%s> when "tag" is provided', (Tag) => {
    render(<TitleComponent tag={Tag}>title</TitleComponent>);

    expect(screen.getByText('title').tagName).toBe(Tag.toUpperCase());
  });

  it('should render with custom class when "className" is provided', () => {
    render(<TitleComponent className="custom-class">title</TitleComponent>);

    expect(screen.getByText('title')).toHaveClass('custom-class');
  });
});
