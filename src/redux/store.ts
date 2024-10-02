import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { searchSlice } from "./slices";
import { exchangeApi } from "./services";
import { setSearchMiddleware } from "./middleware";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    [exchangeApi.reducerPath]: exchangeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(exchangeApi.middleware)
      .concat(setSearchMiddleware.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
