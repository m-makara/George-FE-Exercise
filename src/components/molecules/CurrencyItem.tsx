import { CountryInfo } from "./CountryInfo";
import { ExchangeRate } from "../atoms";
import { ExchnageData } from "../../types";

type Props = ExchnageData;

export const CurrencyItem = ({
  currency,
  flagCode,
  exchangeRate,
  name,
}: Props) => (
  <div className="py-4 px-8 bg-white odd:bg-slate-100 border border-gray-200 shadow dark:bg-gray-800 dark:odd:bg-gray-900 dark:border-gray-700 flex justify-between items-center">
    <CountryInfo name={name} flagCode={flagCode} currency={currency} />
    <ExchangeRate exchangeRate={exchangeRate} currency={currency} />
  </div>
);
