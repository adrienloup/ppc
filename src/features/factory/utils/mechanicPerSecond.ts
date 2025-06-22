import type { Factory } from '@/src/features/factory/domain/factory.ts';

export function mechanicPerSecond(state: Factory): { clip: number; wire: number } {
  const { wire, feature, clipFactory, clipFactoryBonus, megaClipper, clipper, clipperBonus, megaClipperBonus } = state;
  const clipFactoryPS = Math.min(clipFactory * 1e3 * Math.max(1, clipFactoryBonus), 1e11);

  if (feature.clipFactory.enabled) {
    return wire >= clipFactory ? { clip: clipFactoryPS, wire: clipFactory } : { clip: 0, wire: 0 };
  }

  const megaClipperPS = megaClipper * 500 * Math.max(1, megaClipperBonus);
  const clipperPS = clipper * Math.max(1, clipperBonus);
  const totalClipper = megaClipper + clipper;

  if (wire >= totalClipper) return { clip: megaClipperPS + clipperPS, wire: totalClipper };
  if (wire >= megaClipper) return { clip: megaClipperPS, wire: megaClipper };
  if (wire >= clipper) return { clip: clipperPS, wire: clipper };

  return { clip: 0, wire: 0 };
}
