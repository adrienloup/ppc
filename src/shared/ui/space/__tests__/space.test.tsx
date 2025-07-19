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
    const planets = [1];
    const stars = [1, 2];
    const { container } = render(
      <SpaceComponent
        planets={planets}
        stars={stars}
      />
    );

    expect(container.querySelectorAll(`.${styles.planet}`)).toHaveLength(planets.length);
    expect(container.querySelector(`.${styles.stars}`)).toBeInTheDocument();
    expect(container.querySelectorAll(`.${styles.star}`)).toHaveLength(stars.length);
  });
});
