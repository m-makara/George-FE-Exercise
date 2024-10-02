import { CountryCurrency, CountryName } from "../atoms";

type Props = {
  name?: string;
  currency: string;
};

export const CurrencyNameWrapper = ({ currency, name }: Props) => (
  <div className="flex flex-col gap-1">
    {name && <CountryName name={name} />}
    <CountryCurrency currency={currency} />
  </div>
);
