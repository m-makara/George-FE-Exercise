import { CountryFlag } from "./CountryFlag";
import { CurrencyNameWrapper } from "./CurrencyNameWrapper";

type Props = {
  name?: string;
  currency: string;
  flagCode: string;
};

export const CountryInfo = ({ name, flagCode, currency }: Props) => (
  <div className="flex flex-row shrink justify-between text-white dark:text-gray-900 items-center gap-2">
    <CountryFlag flagCode={flagCode} />
    <CurrencyNameWrapper name={name} currency={currency} />
  </div>
);
