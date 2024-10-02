import { ExchnageData } from "../../types";
import { CurrencyItem } from "./CurrencyItem";
import { NoResults } from "./NoResults";

type Props = {
  list: ExchnageData[];
};

export const CurrencyList = ({ list }: Props) =>
  list.length > 0 ? (
    list.map((item) => (
      <CurrencyItem
        {...item}
        name={item.name}
        flagCode={item.flagCode}
        key={item.currency}
      />
    ))
  ) : (
    <NoResults />
  );
