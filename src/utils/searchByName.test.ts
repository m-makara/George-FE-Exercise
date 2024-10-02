import { exchangeMockData } from "./__mocks__";
import { searchByName } from "./searchByName";
import { describe, test, expect } from "vitest";

describe("searchByName", () => {
  test("returns items matching the query", () => {
    const result = searchByName(exchangeMockData, "United");
    expect(result).toEqual([
      {
        currency: "USD",
        name: "United States of America",
        flagCode: "us",
        exchangeRate: 1.2,
      },
    ]);
  });

  test("returns multiple items matching the query", () => {
    const result = searchByName(exchangeMockData, "Dollar");
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
    const result = searchByName(exchangeMockData, "japanese yen");
    expect(result).toEqual([
      {
        currency: "JPY",
        name: "Japanese Yen",
        flagCode: "jpy",
        exchangeRate: 130,
      },
    ]);
  });

  test("returns empty array for no matches", () => {
    const result = searchByName(exchangeMockData, "Euro");
    expect(result).toEqual([]);
  });

  test("returns all items when query is empty", () => {
    const result = searchByName(exchangeMockData, "");
    expect(result).toEqual(exchangeMockData);
  });

  test("handles names with special characters", () => {
    const result = searchByName(exchangeMockData, "United States of America");
    expect(result).toEqual([
      {
        currency: "USD",
        name: "United States of America",
        flagCode: "us",
        exchangeRate: 1.2,
      },
    ]);
  });

  test("returns no matches when the list is empty", () => {
    const result = searchByName([], "United");
    expect(result).toEqual([]);
  });
});
