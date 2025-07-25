export function getProd(
  wire: number,
  clipper: number,
  megaClipper: number,
  clipFactory: number
): {
  wire: number;
  clipper: number;
  megaClipper: number;
  clipFactory: number;
} {
  if (wire >= clipper + megaClipper + clipFactory) {
    wire = clipper + megaClipper + clipFactory;
  }

  if (wire >= clipFactory) {
    if (wire >= clipFactory + megaClipper) {
      // Assez pour clipFactory et megaClipper
      return { wire, clipFactory, megaClipper, clipper: wire - clipFactory - megaClipper };
    } else {
      // Pas assez pour megaClipper entier
      return { wire, clipFactory, megaClipper: wire - clipFactory, clipper: 0 };
    }
  } else {
    // Pas assez pour clipFactory entier
    return { wire, clipFactory: wire, megaClipper: 0, clipper: 0 };
  }
}
