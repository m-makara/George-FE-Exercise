import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  ExchangeResponse,
  ExchangeTransformedResponse,
} from "../../types";

export const exchangeApi = createApi({
  reducerPath: "exchangeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getExchange: builder.query<ExchangeTransformedResponse, void>({
      query: () => "",
      transformResponse: (response: ExchangeResponse) => {
        return {
          ...response,
          data: response.fx
            .filter(
              ({ exchangeRate, currency }) =>
                typeof exchangeRate !== "undefined" &&
                typeof currency !== "undefined"
            )
            .map((data) => ({
              ...data,
              name: data.nameI18N,
              exchangeRate: data.exchangeRate!.middle,
              flagCode: data.currency.toLowerCase().trim().slice(0, 2),
            })),
        } satisfies ExchangeTransformedResponse;
      },
    }),
  }),
});

export const { useGetExchangeQuery } = exchangeApi;
