import { useSpring, animated } from '@react-spring/web';
import { useEffect } from 'react';

interface Page3ContentProps {
  visible: boolean;
}

export function Page3Content({ visible }: Page3ContentProps) {
  const [styles, api] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(20px)',
    config: { tension: 180, friction: 20 },
  }));

  useEffect(() => {
    if (visible) {
      api.start({ opacity: 1, transform: 'translateY(0)' });
    } else {
      api.start({ opacity: 0, transform: 'translateY(200%)' });
    }
  }, [visible, api]);

  return (
    <animated.div style={styles}>
      <div>Page 3 top</div>
      {Array.from({ length: 13 }, (_, i) => (
        <div
          key={i}
          style={{
            height: '200px',
            border: '1px solid red',
            marginBottom: '10px',
          }}
        >
          Page 3 {String.fromCharCode(97 + i)} card
        </div>
      ))}
      <div>Page 3 bottom</div>
    </animated.div>
  );
}
