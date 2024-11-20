export const dateFormatter = (
  date: Date | string | number,
  locale: string = "en-US",
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
): string => {
  const _date = new Date(date);

  if (isNaN(_date.getTime())) {
    throw new Error(
      "Invalid date: Please provide a valid date object, string, or timestamp."
    );
  }

  return new Intl.DateTimeFormat(locale, options).format(_date);
};

export const numberFormatter = (
  number: number | null | undefined,
  locale: string = "en-US",
  minimumFractionDigits: number = 2,
  maximumFractionDigits: number = 2
): string => {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("Invalid input: The number must be a valid numeric value.");
  }

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(number);
};

export const currencyFormatter = (
  amount: number | null | undefined,
  locale: string = "en-US",
  currency: string = "ETB"
): string => {
  if (typeof amount !== "number" || isNaN(amount)) {
    throw new Error("Invalid input: The amount must be a valid numeric value.");
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};
