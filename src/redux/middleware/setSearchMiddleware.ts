import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setSearchQuery } from "../slices";
import { SEARCH_PARAM_NAME } from "../constants";

export const setSearchMiddleware = createListenerMiddleware();

setSearchMiddleware.startListening({
  actionCreator: setSearchQuery,
  effect: (action) => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set(SEARCH_PARAM_NAME, action.payload);
      window.history.pushState(null, "", url.toString());
    } catch (e) {
      console.error("Unable to set URL search parameter");
    }
  },
});
