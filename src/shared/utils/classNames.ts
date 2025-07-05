export const classNames = (list: (string | null | undefined)[]) => list.filter((className) => !!className).join(' ');
