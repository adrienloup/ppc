import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { formatNumber } from '@/src/shared/utils/formatNumber.ts';
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

function formatShort(value: number, locale: 'en' | 'fr') {
  if (value < 1e6) {
    return { scaled: formatNumber(value, locale), unit: '' };
  }
  let tier = Math.floor(Math.log10(value) / 3);
  if (tier >= UNITS.length) {
    tier = UNITS.length - 1;
  }
  const scale = Math.pow(10, tier * 3);
  return {
    scaled: (value / scale).toFixed(2),
    unit: UNITS[tier],
  };
}

export const NumberComponent = ({ className, value, valueMax, asset }: Number) => {
  const { lang } = useProfile();

  let _value = '';
  let _valueMax = '';

  if (asset === 'percent') {
    _value = new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value!);
  } else if (asset === 'currency') {
    const { scaled, unit } = formatShort(value!, lang);
    const currencyUnit = CURRENCY[lang];
    _value = lang === 'en' ? `${currencyUnit}${scaled}${unit}` : `${scaled}${unit}${currencyUnit}`;
  } else if (asset === 'weight') {
    const { scaled, unit } = formatShort(value!, lang);
    const weightUnit = WEIGHT[lang];
    _value = `${scaled}${unit} ${weightUnit}`;
  } else if (asset === 'energy') {
    const { scaled, unit } = formatShort(value!, lang);
    const { scaled: scaledMax, unit: unitMax } = formatShort(valueMax!, lang);
    _value = `${scaled}${unit}`;
    _valueMax = `${scaledMax}${unitMax}`;
  } else {
    const { scaled, unit } = formatShort(value!, lang);
    const { scaled: scaledMax, unit: unitMax } = formatShort(valueMax!, lang);
    _value = `${scaled}${unit}`;
    _valueMax = `${scaledMax}${unitMax}`;
  }

  return (
    <span className={className}>
      {_value}
      {valueMax && `/${_valueMax}`}
    </span>
  );
};

// import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
// import type { Number } from '@/src/shared/ui/number/number.type.ts';
//
// const UNITS: string[] = [
//   '',
//   'K',
//   'M',
//   'B',
//   'T',
//   'Qa',
//   'Qi',
//   'Sx',
//   'Sp',
//   'Oc',
//   'No',
//   'Dec',
//   'Und',
//   'Duo',
//   'Tre',
//   'Quat',
//   'Quin',
//   'Sex',
//   'Sept',
//   'Octo',
//   'Noni',
//   'Vig',
// ];
//
// const CURRENCY: Record<'en' | 'fr', string> = {
//   en: '$',
//   fr: '€',
// };
//
// const WEIGHT: Record<'en' | 'fr', string> = {
//   en: 'lb',
//   fr: 'kg',
// };
//
// // const ENERGY: Record<'en' | 'fr', string> = {
// //   en: 'mw',
// //   fr: 'kwh',
// // };
//
// const formatNumber = (value: number, locale: 'en' | 'fr') => {
//   return new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'fr-FR', {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 2,
//   }).format(value);
// };
//
// function formatShort(value: number, locale: 'en' | 'fr') {
//   if (value < 999999) {
//     return { scaled: formatNumber(value, locale), unit: '' };
//   }
//   let tier = Math.floor(Math.log10(value) / 3);
//   if (tier >= UNITS.length) {
//     tier = UNITS.length - 1;
//   }
//   const scale = Math.pow(10, tier * 3);
//   return {
//     scaled: value / scale,
//     unit: UNITS[tier],
//   };
// }
//
// export const NumberComponent = ({ className, value, valueMax, asset, decimal }: Number) => {
//   const { lang } = useProfile();
//   // const locale = lang === 'en' ? 'en-US' : 'fr-FR';
//   // const digits: 2 | 0 = decimal ? 2 : 0;
//
//   let _value = '';
//   let _valueMax = '';
//
//   if (asset === 'percent') {
//     _value = new Intl.NumberFormat('en-US', {
//       style: 'percent',
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 2,
//     }).format(value!);
//   } else if (asset === 'currency') {
//     const { scaled, unit } = formatShort(value!, lang);
//     const currencyUnit = CURRENCY[lang];
//     // _value = `${currencyUnit}${scaled.toFixed(digits)}${unit}`;
//     _value = `${scaled}${unit}${currencyUnit}`;
//     _value = lang === 'en' ? `${currencyUnit}${scaled}${unit}` : `${scaled}${unit}${currencyUnit}`;
//   } else if (asset === 'weight') {
//     const { scaled, unit } = formatShort(value!, lang);
//     const weightUnit = WEIGHT[lang];
//     // _value = `${scaled.toFixed(digits)}${unit} ${weightUnit}`;
//     _value = `${scaled}${unit} ${weightUnit}`;
//   } else if (asset === 'energy') {
//     const { scaled, unit } = formatShort(value!, lang);
//     const { scaled: scaledMax, unit: unitMax } = formatShort(valueMax!, lang);
//     // const energyUnit = ENERGY[lang];
//     _value = `${scaled}${unit}`;
//     // _value = `${scaled.toFixed(digits)}${unit}`;
//     _valueMax = `${scaledMax}${unitMax}`;
//     // _valueMax = `${scaledMax.toFixed(digits)}${unitMax}`;
//   } else {
//     const { scaled, unit } = formatShort(value!, lang);
//     const { scaled: scaledMax, unit: unitMax } = formatShort(valueMax!, lang);
//     _value = `${scaled}${unit}`;
//     // _value = `${scaled.toFixed(digits)}${unit}`;
//     _valueMax = `${scaledMax}${unitMax}`;
//     // _valueMax = `${scaledMax.toFixed(digits)}${unitMax}`;
//   }
//
//   return (
//     <span className={className}>
//       {_value}
//       {valueMax && `/${_valueMax}`}
//     </span>
//   );
// };
