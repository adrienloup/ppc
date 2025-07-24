import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { SpaceComponent } from '@/src/shared/ui/space/space.component.tsx';
import styles from '@/src/shared/ui/space/space.module.scss';

describe('space component', () => {
  it('should render nothing if "planets" or "stars" is not provided', () => {
    const { container } = render(<SpaceComponent />);

    expect(container.querySelector(`.${styles.space}`)).toBeInTheDocument();
    expect(container.querySelectorAll(`.${styles.planet}`)).toHaveLength(0);
    expect(container.querySelectorAll(`.${styles.star}`)).toHaveLength(0);
  });

  it('should render right number of planets and stars', () => {
    const { container } = render(
      <SpaceComponent
        planets={[1]}
        stars={[[1], [1, 2]]}
      />
    );

    expect(container.querySelectorAll(`.${styles.planet}`)).toHaveLength(1);
    expect(container.querySelectorAll(`.${styles.stars}`)).toHaveLength(2);
    expect(container.querySelectorAll(`.${styles.star}`)).toHaveLength(3);
  });
});
