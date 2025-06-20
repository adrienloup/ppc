import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';

describe('button component', () => {
  it('renders the label when "children" is provided', () => {
    render(<ButtonComponent>button</ButtonComponent>);

    expect(screen.getByText('button')).toBeInTheDocument();
  });

  it('renders a "button" tag when no "to" or "href" is provided', () => {
    render(<ButtonComponent>button</ButtonComponent>);
    const button = screen.getByRole('button', { name: 'button' });

    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
  });

  it('renders a "a" tag when "href" is provided', () => {
    render(<ButtonComponent href="https://example.com">button</ButtonComponent>);
    const link = screen.getByRole('link', { name: 'button' });

    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('renders a "link" tag when "to" is provided', () => {
    render(
      <MemoryRouter>
        <ButtonComponent to="/about">about</ButtonComponent>
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: 'about' });

    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/about');
  });

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    render(<ButtonComponent onClick={onClick}>button</ButtonComponent>);
    await userEvent.click(screen.getByRole('button', { name: 'button' }));

    expect(onClick).toHaveBeenCalled();
  });

  it('disables the button when disabled=true', () => {
    render(<ButtonComponent disabled>Disabled</ButtonComponent>);

    expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
  });
});
