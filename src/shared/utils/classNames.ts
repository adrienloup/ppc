export const classNames = (...args: (string | boolean | null | undefined)[]) =>
  args.filter((className) => !!className).join(' ');
