import { useEffect, useRef } from 'react';

export function useAudioUnlock() {
  const unlockedRef = useRef(false);

  useEffect(() => {
    if (unlockedRef.current) return;

    const unlock = () => {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();

      ctx.resume().catch(() => {});
      unlockedRef.current = true;

      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('touchstart', unlock);
    };

    window.addEventListener('pointerdown', unlock, { once: true });
    window.addEventListener('keydown', unlock, { once: true });
    window.addEventListener('touchstart', unlock, { once: true });

    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('touchstart', unlock);
    };
  }, []);

  return unlockedRef;
}
