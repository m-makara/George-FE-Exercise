import { ExchnageData } from "../types";

export const searchByName = (list: ExchnageData[], query: string) =>
  list.filter(({ name }) => name?.toLowerCase().includes(query.toLowerCase()));
