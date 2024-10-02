import { ExchnageData } from "../types";
import { searchByCurrency } from "./searchByCurrency";
import { searchByName } from "./searchByName";

export const search = (list: ExchnageData[], query: string) =>
  Array.from(
    new Set(searchByCurrency(list, query).concat(searchByName(list, query)))
  );
