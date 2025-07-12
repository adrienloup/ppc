import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';

describe('article component', () => {
  it('should render content when "children" is provided', () => {
    render(<ArticleComponent>article</ArticleComponent>);

    expect(screen.getByText('article')).toBeInTheDocument();
  });
});
