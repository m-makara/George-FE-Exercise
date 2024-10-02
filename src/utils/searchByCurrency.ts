import { ExchnageData } from "../types";

export const searchByCurrency = (list: ExchnageData[], query: string) =>
  list.filter(({ currency }) => currency.includes(query.toUpperCase()));
