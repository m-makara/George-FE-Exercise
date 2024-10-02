import { exchangeMockData } from "./__mocks__";
import { searchByCurrency } from "./searchByCurrency";
import { describe, test, expect } from "vitest";

describe("searchByCurrency", () => {
  test("returns items matching the query", () => {
    const result = searchByCurrency(exchangeMockData, "Y");
    expect(result).toEqual([
      {
        currency: "JPY",
        name: "Japanese Yen",
        flagCode: "jpy",
        exchangeRate: 130,
      },
    ]);
  });

  test("returns multiple items matching the query", () => {
    const result = searchByCurrency(exchangeMockData, "A");
    expect(result).toEqual([
      {
        currency: "AUD",
        name: "Australian Dollar",
        flagCode: "au",
        exchangeRate: 1.567,
      },
      {
        currency: "CAD",
        name: "Canadian Dollar",
        flagCode: "ca",
        exchangeRate: 1.497,
      },
    ]);
  });

  test("is case-insensitive", () => {
    const result = searchByCurrency(exchangeMockData, "usd");
    expect(result).toEqual([
      {
        currency: "USD",
        name: "United States of America",
        flagCode: "us",
        exchangeRate: 1.2,
      },
    ]);
  });

  test("returns empty array for no matches", () => {
    const result = searchByCurrency(exchangeMockData, "XYZ");
    expect(result).toEqual([]);
  });

  test("returns all items when query is empty", () => {
    const result = searchByCurrency(exchangeMockData, "");
    expect(result).toEqual(exchangeMockData);
  });

  test("returns no matches for empty data list", () => {
    const result = searchByCurrency([], "USD");
    expect(result).toEqual([]);
  });

  test("returns no matches for empty data list and empty query", () => {
    const result = searchByCurrency([], "");
    expect(result).toEqual([]);
  });
});
