export function formatNumber(
  number: number,
  decimalPlaces = 0,
  locale = "en-US"
) {
  if (number == null) {
    return "";
  }

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(number);
}
