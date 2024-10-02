import { search } from "./search";
import { describe, test, expect } from "vitest";
import { exchangeMockData } from "./__mocks__";

describe("search function test suite", () => {
  test("returns items matching the query by currency and name", () => {
    const result = search(exchangeMockData, "Dollar");
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

  test("removes duplicates when matches appear in both currency and name", () => {
    const result = search(exchangeMockData, "USD");
    expect(result).toEqual([
      {
        currency: "USD",
        name: "United States of America",
        flagCode: "us",
        exchangeRate: 1.2,
      },
    ]);
  });

  test("is case-insensitive", () => {
    const result = search(exchangeMockData, "japanese");
    expect(result).toEqual([
      {
        currency: "JPY",
        name: "Japanese Yen",
        flagCode: "jpy",
        exchangeRate: 130,
      },
    ]);
  });

  test("returns no items when the query has no matches", () => {
    const result = search(exchangeMockData, "Euro");
    expect(result).toEqual([]);
  });

  test("returns all items when the query is empty", () => {
    const result = search(exchangeMockData, "");
    expect(result).toEqual(exchangeMockData);
  });

  test("returns an empty array when the list is empty", () => {
    const result = search([], "USD");
    expect(result).toEqual([]);
  });

  test("handles cases where only currency matches", () => {
    const result = search(exchangeMockData, "GBP");
    expect(result).toEqual([
      {
        currency: "GBP",
        name: "British Pound",
        flagCode: "gb",
        exchangeRate: 0.875,
      },
    ]);
  });

  test("handles cases where only name matches", () => {
    const result = search(exchangeMockData, "Pound");
    expect(result).toEqual([
      {
        currency: "GBP",
        name: "British Pound",
        flagCode: "gb",
        exchangeRate: 0.875,
      },
    ]);
  });
});
