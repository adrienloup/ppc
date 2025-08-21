export const formatNumber = (value: number, locale: 'en' | 'fr') => {
  return new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'fr-FR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
};
