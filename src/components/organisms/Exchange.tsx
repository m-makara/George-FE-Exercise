import { useAppSelector } from "../../redux/hooks";
import { useGetExchangeQuery } from "../../redux/services";
import { selectSearchQuery } from "../../redux/slices";
import { search } from "../../utils";
import { Error, LoadingIndicator, CurrencyList } from "../molecules";

export const Exchange = () => {
  const { isSuccess, isLoading, isError, data } = useGetExchangeQuery();
  const query = useAppSelector(selectSearchQuery);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isSuccess) {
    return <CurrencyList list={query ? search(data.data, query) : data.data} />;
  }
  if (isError) {
    return <Error />;
  }
};
