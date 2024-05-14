export function formatPrice(
  price: number,
  currency = "USD",
  decimalPlaces = 2,
  locale = "en-US"
) {
  if (price == null) {
    return "";
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(price);
}
