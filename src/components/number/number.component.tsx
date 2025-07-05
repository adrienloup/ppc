// import { useProfile } from '@/src/features/profile/infrastructure/useProfile.ts';
import type { Number } from '@/src/components/number/number.type.ts';

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

// const CURRENCY_SYMBOL: Record<'en' | 'fr', string> = {
//   en: '$',
//   fr: '€',
// };
//
// const WEIGHT_UNIT: Record<'en' | 'fr', string> = {
//   en: 'lb',
//   fr: 'kg',
// };

function formatShort(value: number) {
  if (value < 1000) return { scaled: value, unit: '' };

  let tier = Math.floor(Math.log10(value) / 3);
  if (tier >= UNITS.length) {
    tier = UNITS.length - 1;
  }
  const scale = Math.pow(10, tier * 3);
  return { scaled: value / scale, unit: UNITS[tier] };
}

// export const NumberComponent = ({ className, value, valueMax, decimal = false, unit }: Number) => {
export const NumberComponent = ({ className, value, valueMax, asset }: Number) => {
  // const [profile] = useProfile();
  // const locale = profile.language === 'fr' ? 'fr-FR' : 'en-US';
  const locale = 'en-US';
  // const digits: 2 | 0 = decimal ? 2 : 0;
  const digits = 0;

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
    // const symbol = CURRENCY_SYMBOL[profile.language];
    const symbol = '$';
    // _value =
    //   profile.language === 'en'
    //     ? `${symbol}${scaled.toFixed(digits)}${unit}`
    //     : `${scaled.toFixed(digits)} ${unit} ${symbol}`;
    _value = `${symbol}${scaled.toFixed(2)}${unit}`;
  } else if (asset === 'weight') {
    const { scaled, unit } = formatShort(value!);
    // const weightUnit = WEIGHT_UNIT[profile.language];
    const weightUnit = '$';
    _value = `${scaled.toFixed(digits)} ${unit} ${weightUnit}`;
  } else {
    const { scaled, unit } = formatShort(value!);
    const { scaled: scaledMax, unit: unitMax } = formatShort(valueMax!);
    _value = `${scaled.toFixed(digits)}${unit}`;
    _valueMax = `${scaledMax.toFixed(digits)} ${unitMax}`;
  }

  return (
    <span className={className}>
      {value && _value}
      {valueMax && `/${_valueMax}`}
    </span>
  );
};
