// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.
// function convertCurrency({amount, currency}) {
//   console.log(`Converting ${amount} to ${currency}`);
// }

type Currency = "USD" | "EUR" | "UAH";

interface ConvertCurrencyParams {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertCurrencyParams): string {
  return `Converting ${amount} to ${currency}`;
}