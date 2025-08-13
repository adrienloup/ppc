import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import type { Number } from '@/src/shared/ui/number/number.type.ts';

const UNITS: string[] = [
  '',
  'K',
  'M',
  'B',
  'T',
  'Qa',
  'Qi',
  'Sx',
  'Sp',
  'Oc',
  'No',
  'Dec',
  'Und',
  'Duo',
  'Tre',
  'Quat',
  'Quin',
  'Sex',
  'Sept',
  'Octo',
  'Noni',
  'Vig',
];

const CURRENCY: Record<'en' | 'fr', string> = {
  en: '$',
  fr: '€',
};

const WEIGHT: Record<'en' | 'fr', string> = {
  en: 'lb',
  fr: 'kg',
};

// const ENERGY: Record<'en' | 'fr', string> = {
//   en: 'mw',
//   fr: 'kwh',
// };

function formatShort(value: number) {
  if (value < 10000) {
    return { scaled: value, unit: '' };
  }
  let tier = Math.floor(Math.log10(value) / 3);
  if (tier >= UNITS.length) {
    tier = UNITS.length - 1;
  }
  const scale = Math.pow(10, tier * 3);
  return {
    scaled: value / scale,
    unit: UNITS[tier],
  };
}

export const NumberComponent = ({ className, value, valueMax, asset, decimal }: Number) => {
  const { lang } = useProfile();
  const locale = lang === 'en' ? 'en-US' : 'fr-FR';
  const digits: 2 | 0 = decimal ? 2 : 0;

  let _value = '';
  let _valueMax = '';

  if (asset === 'percent') {
    _value = new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value!);
  } else if (asset === 'currency') {
    const { scaled, unit } = formatShort(value!);
    const currencyUnit = CURRENCY[lang];
    _value = `${currencyUnit}${scaled.toFixed(digits)}${unit}`;
  } else if (asset === 'weight') {
    const { scaled, unit } = formatShort(value!);
    const weightUnit = WEIGHT[lang];
    _value = `${scaled.toFixed(digits)}${unit} ${weightUnit}`;
  } else if (asset === 'energy') {
    const { scaled, unit } = formatShort(value!);
    const { scaled: scaledMax, unit: unitMax } = formatShort(valueMax!);
    // const energyUnit = ENERGY[lang];
    _value = `${scaled.toFixed(digits)}${unit}`;
    _valueMax = `${scaledMax.toFixed(digits)}${unitMax}`;
  } else {
    const { scaled, unit } = formatShort(value!);
    const { scaled: scaledMax, unit: unitMax } = formatShort(valueMax!);
    _value = `${scaled.toFixed(digits)}${unit}`;
    _valueMax = `${scaledMax.toFixed(digits)}${unitMax}`;
  }

  return (
    <span className={className}>
      {_value}
      {valueMax && `/${_valueMax}`}
    </span>
  );
};
